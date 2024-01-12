import { Injectable, computed, signal } from '@angular/core';
import { HelperService } from './helper.service';
import { ClienteEntity } from '../entities/cliente.entity';
import { Endereco } from '../types/endereco.interface';
import { PaginationOptionsType } from '../types/paginationTypes/pagination-options.type';
import { LimitEnum } from '../types/paginationTypes/limit.enum';
import { OrderEnum } from '../types/paginationTypes/order.enum';
import { OrderByColumnEnum } from '../types/paginationTypes/order-by-column.enum';
import { StartByOrContainEnum } from '../types/paginationTypes/start-by-or-contain.enum';
import { SearchByEnum } from '../types/paginationTypes/search-by.enum';

enum SuccessOrFailure {
    success = 'success',
    failure = 'failure'
}

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(
        private helperService: HelperService
    ) { }
    private clientes = [
        new ClienteEntity({
            atualizado_em: new Date('03-23-2023').toISOString(),
            cpf: '123',
            criado_em: new Date('03-23-2023').toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim Terceiro',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date('01-23-2023').toISOString(),
            cpf: '9116',
            criado_em: new Date('01-23-2023').toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim Primeiro',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date('04-23-2023').toISOString(),
            cpf: '99999999999',
            criado_em: new Date('04-23-2023').toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim Maio',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date('02-23-2023').toISOString(),
            cpf: '99999999999',
            criado_em: new Date('02-23-2023').toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim Segundo',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Roberto',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Carlos Maga',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Luiz Carlos',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Vitor Daniel',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Guizera Comparin',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'aaa',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'abc',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'abb',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'baaa',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'cceee',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
        new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            cpf: '99999999999',
            criado_em: new Date().toISOString(),
            endereco: {
                bairro: 'asd',
                cep: 'asdasd',
                cidade: 'aa',
                estado: 'weee',
                numero: '22',
                rua: 'tal'
            } as Endereco,
            id: this.helperService.newUUID(),
            nome: 'Joaquim',
            telefone: '47992831801'
        }),
    ]

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

    private paginationMetaSignal = signal(this.updatePaginationMeta())

    private updatePaginationMeta() {
        const newPaginationMeta = {
            itemCount: this.clientes.length > this.lastPaginationOptionsUsedSig().limit! ? this.lastPaginationOptionsUsedSig().limit! : this.clientes.length,
            totalItems: this.clientes.length!,
            currentPage: this.lastPaginationOptionsUsedSig().page!,
            itemsPerPage: this.lastPaginationOptionsUsedSig().limit!,
            totalPages: Math.ceil(this.clientes.length / this.lastPaginationOptionsUsedSig().limit!),
        }
        this.paginationMetaSignal?.set(newPaginationMeta)
        return newPaginationMeta
    }

    public getPaginationMetaSignal = computed(this.paginationMetaSignal)

    private clientesListSignal = signal(this.fetchClientesList())

    public getClientesListSignal = computed(this.clientesListSignal)

    public deleteById(clienteId: string) {
        this.clientesListSignal.update(clienteList => {
            return clienteList.filter(cliente => cliente.id !== clienteId)
        })
    }

    public createOrUpdate(clienteEntity: ClienteEntity) {
        // console.log('before adding', this.clientesListSignal())
        const clienteFound = this.clientesListSignal().find(cliente => cliente.id === clienteEntity.id)
        console.log('clienteFound', clienteFound)
        if (!clienteFound) {
            this.clientesListSignal.update(clienteList => { return [...clienteList, clienteEntity] })
            // console.log('after create', this.clientesListSignal())
            return
        }
        const clienteIndex = this.clientesListSignal().indexOf(clienteFound)
        this.clientesListSignal.update(clienteList => {
            clienteList[clienteIndex] = clienteEntity
            return clienteList
        })
        // console.log('after update', this.clientesListSignal())
    }

    public fetchClientesList({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain }: PaginationOptionsType = {} as PaginationOptionsType) {
        this.lastPaginationOptionsUsedSig.set({
            page: page || this.lastPaginationOptionsUsedSig().page,
            limit: limit || this.lastPaginationOptionsUsedSig().limit,
            order: order || this.lastPaginationOptionsUsedSig().order,
            searchBy: searchBy ? searchBy : this.lastPaginationOptionsUsedSig().searchBy,
            searchQuery: searchQuery !== undefined && searchQuery !== null ? searchQuery : this.lastPaginationOptionsUsedSig().searchQuery,
            orderByColumn: orderByColumn || this.lastPaginationOptionsUsedSig().orderByColumn,
            startByOrContain: startByOrContain || this.lastPaginationOptionsUsedSig().startByOrContain,
        })
        page = this.lastPaginationOptionsUsedSig().page!
        limit = this.lastPaginationOptionsUsedSig().limit!
        order = this.lastPaginationOptionsUsedSig().order!
        searchBy = this.lastPaginationOptionsUsedSig().searchBy!
        searchQuery = this.lastPaginationOptionsUsedSig().searchQuery!
        orderByColumn = this.lastPaginationOptionsUsedSig().orderByColumn!
        startByOrContain = this.lastPaginationOptionsUsedSig().startByOrContain!
        // Filter by searchQuery and searchBy.
        let clientes = this.filterBySearch(this.clientes, searchBy, searchQuery, startByOrContain)
        // Slice by limit and page.
        clientes = this.getSlice(clientes, limit, page)
        // Order by column and direction
        clientes = this.orderByColumn(clientes, orderByColumn, order)
        // Updating clientesListSignal.
        this.clientesListSignal?.set(clientes)
        // Update paginationMetaSignal.
        this.updatePaginationMeta()
        return clientes
    }

    private filterBySearch(clienteList: ClienteEntity[], searchBy: "nome" | "cpf", searchQuery: string, startByOrContain: StartByOrContainEnum) {
        if (startByOrContain === StartByOrContainEnum.contain)
            return clienteList.filter(cliente => cliente[searchBy].toLowerCase().includes(searchQuery.toLowerCase()))
        else return clienteList.filter(cliente => cliente[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()))
    }

    private getSlice(clienteList: ClienteEntity[], limit: number, page: number) {
        const startIndex = (limit * page) - limit
        const endIndex = startIndex + limit
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
            if (a[orderByColumn].toLowerCase() < b[orderByColumn].toLowerCase()) return -1;
            if (a[orderByColumn].toLowerCase() > b[orderByColumn].toLowerCase()) return 1;
            return 0;
        })
    }



}
