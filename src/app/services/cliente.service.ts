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
import { PaginationService } from './pagination.service';

enum SuccessOrFailure {
    success = 'success',
    failure = 'failure'
}

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(
        private helperService: HelperService,
        private paginationService: PaginationService,
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
        this.paginationService.setLastPaginationOptionsUsedSig({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain })
        // Call pagination method on ClienteList.
        let clientes = this.paginationService.paginateClienteList(this.clientes)
        // Updating clientesListSignal.
        this.clientesListSignal?.set(clientes)
        return clientes
    }
}
