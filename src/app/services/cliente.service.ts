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

    private getAllClientesList = this.localStorageService.getClienteList.bind(this.localStorageService)

    private paginatedClientesListSignal = signal<ClienteEntity[]>(this.getAllClientesList() || [])

    public getClientesListSignal = computed(this.paginatedClientesListSignal)

    public last5ClientesAddedSignal = computed(() => {
        const newObject: ClienteEntity[] = JSON.parse(JSON.stringify(this.getClientesListSignal()))
        const clientesSortedByCriadoEm = newObject.sort((a, b) => new Date(b.criado_em).getTime() - new Date(a.criado_em).getTime())
        const last5AddedClients = clientesSortedByCriadoEm.slice(0, 5)
        return last5AddedClients
    })

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
        this.fetchClientesList({ page: 1 })
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
