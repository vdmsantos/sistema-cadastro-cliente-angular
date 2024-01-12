import { Injectable, computed, signal } from '@angular/core';
import { ClienteEntity } from '../entities/cliente.entity';
import { LimitEnum } from '../types/paginationTypes/limit.enum';
import { OrderByColumnEnum } from '../types/paginationTypes/order-by-column.enum';
import { OrderEnum } from '../types/paginationTypes/order.enum';
import { PaginationOptionsType } from '../types/paginationTypes/pagination-options.type';
import { SearchByEnum } from '../types/paginationTypes/search-by.enum';
import { StartByOrContainEnum } from '../types/paginationTypes/start-by-or-contain.enum';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    constructor() { }

    private lastPaginationOptionsUsedSig = signal<PaginationOptionsType>({
        page: 1,
        limit: LimitEnum._10,
        order: OrderEnum.ASC,
        searchBy: SearchByEnum.nome,
        searchQuery: '',
        orderByColumn: OrderByColumnEnum.atualizado_em,
        startByOrContain: StartByOrContainEnum.contain
    })

    public getLastPaginationOptionsUsedSig = computed(this.lastPaginationOptionsUsedSig)

    public setLastPaginationOptionsUsedSig({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain }: PaginationOptionsType) {
        this.lastPaginationOptionsUsedSig.set({
            page: page || this.lastPaginationOptionsUsedSig().page,
            limit: limit || this.lastPaginationOptionsUsedSig().limit,
            order: order || this.lastPaginationOptionsUsedSig().order,
            searchBy: searchBy ? searchBy : this.lastPaginationOptionsUsedSig().searchBy,
            searchQuery: searchQuery !== undefined && searchQuery !== null ? searchQuery : this.lastPaginationOptionsUsedSig().searchQuery,
            orderByColumn: orderByColumn || this.lastPaginationOptionsUsedSig().orderByColumn,
            startByOrContain: startByOrContain || this.lastPaginationOptionsUsedSig().startByOrContain,
        })
    }

    public paginateClienteList(clientesList: ClienteEntity[]) {
        // Filter by searchQuery and searchBy.
        let clientes = this.filterBySearch(
            clientesList,
            this.getLastPaginationOptionsUsedSig().searchBy!,
            this.getLastPaginationOptionsUsedSig().searchQuery!,
            this.getLastPaginationOptionsUsedSig().startByOrContain!
        )
        // Order by column and direction
        clientes = this.orderByColumn(
            clientes,
            this.getLastPaginationOptionsUsedSig().orderByColumn!,
            this.getLastPaginationOptionsUsedSig().order!
        )
        // Slice by limit and page.
        clientes = this.getSlice(
            clientes,
            this.getLastPaginationOptionsUsedSig().limit! as number,
            this.getLastPaginationOptionsUsedSig().page!
        )
        // Update paginationMetaSignal.
        this.updatePaginationMeta(clientesList)
        return clientes
    }

    private paginationMetaSignal = signal(this.updatePaginationMeta())

    public getPaginationMetaSignal = computed(this.paginationMetaSignal)

    private updatePaginationMeta(clientesList?: ClienteEntity[]) {
        const clientesListLenght = clientesList ? clientesList.length : 0
        const newPaginationMeta = {
            itemCount: clientesListLenght > this.lastPaginationOptionsUsedSig().limit! ? this.lastPaginationOptionsUsedSig().limit! : clientesListLenght,
            totalItems: clientesListLenght,
            currentPage: this.lastPaginationOptionsUsedSig().page!,
            itemsPerPage: this.lastPaginationOptionsUsedSig().limit!,
            totalPages: Math.ceil(clientesListLenght / this.lastPaginationOptionsUsedSig().limit!),
        }
        this.paginationMetaSignal?.set(newPaginationMeta)
        // console.log('this.getLastPaginationOptionsUsedSig()', this.getLastPaginationOptionsUsedSig())
        // console.log('newPaginationMeta', newPaginationMeta)
        return newPaginationMeta
    }

    private filterBySearch(clienteList: ClienteEntity[], searchBy: SearchByEnum, searchQuery: string, startByOrContain: StartByOrContainEnum) {
        if (startByOrContain === StartByOrContainEnum.contain)
            return clienteList.filter(cliente => cliente[searchBy].toLowerCase().includes(searchQuery.toLowerCase()))
        else return clienteList.filter(cliente => cliente[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()))
    }

    private getSlice(clienteList: ClienteEntity[], limit: number, page: number) {
        // I'm having to parse it to string and then to number because sometimes 'limit' comes as string.
        // This is literally a TypeScript bug related to Enums.
        const limitNumber = parseInt(limit.toString())
        const pageNumber = parseInt(page.toString())
        const startIndex = (limitNumber * pageNumber) - limitNumber
        const endIndex = startIndex + limitNumber
        return clienteList.slice(startIndex, endIndex)
    }

    private orderByColumn(clienteList: ClienteEntity[], orderByColumn: OrderByColumnEnum, orderDirection: OrderEnum) {
        let sortedArray = clienteList
        if (orderByColumn === OrderByColumnEnum.atualizado_em || orderByColumn === OrderByColumnEnum.criado_em) {
            sortedArray = this.sortByCriadoEmOrAtualizadoEm(clienteList, orderByColumn)
        } else sortedArray = this.sortByNameOrCpf(clienteList, orderByColumn)
        if (orderDirection === OrderEnum.ASC) sortedArray = sortedArray.reverse()
        return sortedArray
    }

    private sortByCriadoEmOrAtualizadoEm(clienteList: ClienteEntity[], orderByColumn: OrderByColumnEnum,) {
        return clienteList.sort((a, b) => {
            return (new Date(a[orderByColumn]).getTime() - new Date(b[orderByColumn]).getTime())
        })
    }

    private sortByNameOrCpf(clienteList: ClienteEntity[], orderByColumn: OrderByColumnEnum,) {
        return clienteList.sort((a, b) => {
            if (a[orderByColumn].toLowerCase() > b[orderByColumn].toLowerCase()) return -1;
            if (a[orderByColumn].toLowerCase() < b[orderByColumn].toLowerCase()) return 1;
            return 0;
        })
    }
}
