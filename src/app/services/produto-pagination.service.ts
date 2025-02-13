import { Injectable, computed, signal } from '@angular/core';
import { ProdutoEntity } from '../entities/produto.entity';
import { LimitEnum } from '../types/paginationTypes/limit.enum';
import { OrderProductByColumnEnum } from '../types/paginationTypes/order-by-column.enum';
import { OrderEnum } from '../types/paginationTypes/order.enum';
import { ProductPaginationOptionsType } from '../types/paginationTypes/pagination-options.type';
import { SearchProductByEnum } from '../types/paginationTypes/search-by.enum';
import { StartByOrContainEnum } from '../types/paginationTypes/start-by-or-contain.enum';

@Injectable({
    providedIn: 'root'
})
export class ProdutoPaginationService {

    constructor() { }

    private lastPaginationOptionsUsedSig = signal<ProductPaginationOptionsType>({
        page: 1,
        limit: LimitEnum._10,
        order: OrderEnum.ASC,
        searchBy: SearchProductByEnum.nome,
        searchQuery: '',
        orderByColumn: OrderProductByColumnEnum.atualizado_em,
        startByOrContain: StartByOrContainEnum.contain
    })

    public getLastPaginationOptionsUsedSig = computed(this.lastPaginationOptionsUsedSig)

    public setLastPaginationOptionsUsedSig({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain }: ProductPaginationOptionsType) {
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

    public paginateProdutoList(produtosList: ProdutoEntity[]) {
        // Filter by searchQuery and searchBy.
        let produtos = this.filterBySearch(
          produtosList,
            this.getLastPaginationOptionsUsedSig().searchBy!,
            this.getLastPaginationOptionsUsedSig().searchQuery!,
            this.getLastPaginationOptionsUsedSig().startByOrContain!
        )
        // Order by column and direction
        produtos = this.orderByColumn(
          produtos,
            this.getLastPaginationOptionsUsedSig().orderByColumn as OrderProductByColumnEnum,
            this.getLastPaginationOptionsUsedSig().order!
        )
        // Slice by limit and page.
        produtos = this.getSlice(
          produtos,
            this.getLastPaginationOptionsUsedSig().limit! as number,
            this.getLastPaginationOptionsUsedSig().page!
        )
        // Update paginationMetaSignal.
        this.updatePaginationMeta(produtosList)
        return produtos
    }

    private paginationMetaSignal = signal(this.updatePaginationMeta())

    public getPaginationMetaSignal = computed(this.paginationMetaSignal)

    private updatePaginationMeta(produtosList?: ProdutoEntity[]) {
        const produtosListLenght = produtosList ? produtosList.length : 0
        const newPaginationMeta = {
            itemCount: produtosListLenght > this.lastPaginationOptionsUsedSig().limit! ? this.lastPaginationOptionsUsedSig().limit! : produtosListLenght,
            totalItems: produtosListLenght,
            currentPage: this.lastPaginationOptionsUsedSig().page!,
            itemsPerPage: this.lastPaginationOptionsUsedSig().limit!,
            totalPages: Math.ceil(produtosListLenght / this.lastPaginationOptionsUsedSig().limit!),
        }
        this.paginationMetaSignal?.set(newPaginationMeta)
        // console.log('this.getLastPaginationOptionsUsedSig()', this.getLastPaginationOptionsUsedSig())
        // console.log('newPaginationMeta', newPaginationMeta)
        return newPaginationMeta
    }

    private filterBySearch(produtoList: ProdutoEntity[], searchBy: SearchProductByEnum, searchQuery: string, startByOrContain: StartByOrContainEnum) {
        if (startByOrContain === StartByOrContainEnum.contain)
            return produtoList.filter(produto => produto[searchBy].toLowerCase().includes(searchQuery.toLowerCase()))
        else return produtoList.filter(produto => produto[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()))
    }

    private getSlice(produtoList: ProdutoEntity[], limit: number, page: number) {
        // I'm having to parse it to string and then to number because sometimes 'limit' comes as string.
        // This is literally a TypeScript bug related to Enums.
        const limitNumber = parseInt(limit.toString())
        const pageNumber = parseInt(page.toString())
        const startIndex = (limitNumber * pageNumber) - limitNumber
        const endIndex = startIndex + limitNumber
        return produtoList.slice(startIndex, endIndex)
    }

    private orderByColumn(produtoList: ProdutoEntity[], orderByColumn: OrderProductByColumnEnum, orderDirection: OrderEnum) {
        let sortedArray = produtoList
        if (orderByColumn === OrderProductByColumnEnum.atualizado_em || orderByColumn === OrderProductByColumnEnum.criado_em) {
            sortedArray = this.sortByCriadoEmOrAtualizadoEm(produtoList, orderByColumn)
        } else sortedArray = this.sortByNameOrCpf(produtoList, orderByColumn)
        if (orderDirection === OrderEnum.ASC) sortedArray = sortedArray.reverse()
        return sortedArray
    }

    private sortByCriadoEmOrAtualizadoEm(produtoList: ProdutoEntity[], orderByColumn: OrderProductByColumnEnum,) {
        return produtoList.sort((a, b) => {
            return (new Date(a[orderByColumn]).getTime() - new Date(b[orderByColumn]).getTime())
        })
    }

    private sortByNameOrCpf(produtoList: ProdutoEntity[], orderByColumn: OrderProductByColumnEnum,) {
        return produtoList.sort((a, b) => {
            if (a[orderByColumn].toLowerCase() > b[orderByColumn].toLowerCase()) return -1;
            if (a[orderByColumn].toLowerCase() < b[orderByColumn].toLowerCase()) return 1;
            return 0;
        })
    }
}
