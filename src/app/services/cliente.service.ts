import { Injectable, computed, signal } from '@angular/core';
import { HelperService } from './helper.service';
import { ClienteEntity } from '../entities/cliente.entity';
import { Endereco } from '../types/endereco.interface';
import { PaginationOptionsType } from '../types/paginationTypes/pagination-options.type';
import { PaginationService } from './pagination.service';
import { LocalStorageService } from './local-storage.service';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(
        private helperService: HelperService,
        private paginationService: PaginationService,
        private messageService: MessageService,
        private localStorageService: LocalStorageService,
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

    private getAllClientesList = this.localStorageService.getClienteList.bind(this.localStorageService)

    private paginatedClientesListSignal = signal<ClienteEntity[]>(this.getAllClientesList() || [])

    public getClientesListSignal = computed(this.paginatedClientesListSignal)

    public fetchClientesList({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain }: PaginationOptionsType = {} as PaginationOptionsType) {
        this.paginationService.setLastPaginationOptionsUsedSig({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain })
        // Call pagination method on ClienteList.
        let clientes = this.getAllClientesList()
        clientes = this.paginationService.paginateClienteList(clientes)
        // Updating clientesListSignal.
        this.paginatedClientesListSignal?.set(clientes)
        return clientes
    }

    public deleteById(clienteId: string) {
        const clienteListWithoutCliente = this.getAllClientesList().filter(cliente => cliente.id !== clienteId)
        this.localStorageService.setClienteStorage(clienteListWithoutCliente)
        this.fetchClientesList()
    }

    public createOrUpdate(newClienteData: ClienteEntity) {
        const clienteFound = this.getAllClientesList().find(cliente => cliente.id === newClienteData.id)
        if (!clienteFound) {
            this.createCliente(newClienteData)
            this.showToastMessage('success', 'Cliente criado com sucesso.')
        }
        else {
            this.updateCliente(newClienteData, clienteFound)
            this.showToastMessage('success', 'Cliente atualizado com sucesso.')
        }
        this.fetchClientesList()
    }

    public clearClienteList() {
        this.localStorageService.clearClienteList()
        this.fetchClientesList()
        this.showToastMessage('success', 'Lista esvaziada com sucesso.')
    }

    private createCliente(newCliente: ClienteEntity) {
        const allClientesList = this.getAllClientesList()
        allClientesList.push(newCliente)
        this.localStorageService.setClienteStorage(allClientesList)
    }

    private updateCliente(newClienteData: ClienteEntity, clienteFound: ClienteEntity) {
        let allClientesList = this.getAllClientesList()
        const clienteFoundIndex = this.getAllClientesList().findIndex(cliente => cliente.id === clienteFound.id)
        allClientesList[clienteFoundIndex] = newClienteData
        this.localStorageService.setClienteStorage(allClientesList)
    }

    private showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.clear()
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }
}
