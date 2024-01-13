import { Component, OnInit } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteService } from '../../services/cliente.service';
import { PaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';
import { PaginationService } from '../../services/pagination.service';
import { HelperService } from '../../services/helper.service';
import { PrimeIcons } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DialogMobileListOptionsComponent } from '../../components/dialog-mobile-list-options/dialog-mobile-list-options.component';

@Component({
    selector: 'app-listar-clientes',
    templateUrl: './listar-clientes.component.html',
    styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
    constructor(
        private clienteService: ClienteService,
        private paginationService: PaginationService,
        private helperService: HelperService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.fetchClientesList()
    }

    clientesListSignal = this.clienteService.getClientesListSignal
    paginationMetaSignal = this.paginationService.getPaginationMetaSignal
    lastPaginationOptionsUsedSig = this.paginationService.getLastPaginationOptionsUsedSig
    PrimeIcons = PrimeIcons

    list_tableFields: { label: string, column: string }[] = [
        {
            column: 'nome',
            label: 'Nome'
        },
        {
            column: 'cpf',
            label: 'CPF'
        },
        {
            column: 'telefone',
            label: 'Telefone'
        },
        {
            column: 'criado_em',
            label: 'Data de criação'
        },
        {
            column: 'atualizado_em',
            label: 'Data de modificação'
        },
        {
            column: 'cep',
            label: 'CEP'
        },
        {
            column: 'estado',
            label: 'Estado'
        },
        {
            column: 'cidade',
            label: 'Cidade'
        },
        {
            column: 'bairro',
            label: 'Bairro'
        },
        {
            column: 'rua',
            label: 'Rua'
        },
        {
            column: 'numero',
            label: 'Número'
        },
    ]

    fetchClientesList(
        { page, limit, order, orderByColumn, searchQuery, searchBy, startByOrContain }: PaginationOptionsType = {}
    ) {
        return this.clienteService.fetchClientesList({
            page: page,
            limit: limit,
            orderByColumn: orderByColumn,
            order: order,
            searchQuery: searchQuery,
            searchBy: searchBy,
            startByOrContain: startByOrContain,
        })
    }

    getListItems(clientes: ClienteEntity[]) {
        return clientes.map(item => {
            return {
                ...item,
                rua: item.endereco.rua,
                bairro: item.endereco.bairro,
                cep: item.endereco.cep,
                cidade: item.endereco.cidade,
                estado: item.endereco.estado,
                numero: item.endereco.numero,
            }
        })
    }

    getRandomName() {
        console.log('randomName', this.helperService.getRandomName())
    }

    add10Clientes() {
        const getNewCliente = () => new ClienteEntity({
            atualizado_em: new Date().toISOString(),
            criado_em: new Date().toISOString(),
            cpf: '99999999999',
            id: this.helperService.newUUID(),
            nome: this.helperService.getRandomName(),
            telefone: '123456789',
            endereco: {
                bairro: 'aleatorio',
                cep: '89012060',
                cidade: 'aleatorio',
                estado: 'aleatorio',
                numero: '123',
                rua: 'aleatorio'
            },
        })
        const _10NewClientes = [getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(), getNewCliente(),]
        _10NewClientes.forEach(cliente => {
            this.clienteService.createOrUpdate(cliente)
        })
        this.fetchClientesList()
    }

    clearClienteList() {
        this.clienteService.clearClienteList()
    }

    openSearchConfigDialog() {
        this.dialog.open(DialogMobileListOptionsComponent, {
            maxWidth: `100vw`,
        })
    }
}
