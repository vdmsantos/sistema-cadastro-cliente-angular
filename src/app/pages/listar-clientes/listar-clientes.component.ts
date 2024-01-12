import { Component } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteService } from '../../services/cliente.service';
import { PaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';
import { PaginationService } from '../../services/pagination.service';

@Component({
    selector: 'app-listar-clientes',
    templateUrl: './listar-clientes.component.html',
    styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent {
    constructor(
        private clienteService: ClienteService,
        private paginationService: PaginationService,
    ) { }

    clientesListSignal = this.clienteService.getClientesListSignal
    paginationMetaSignal = this.paginationService.getPaginationMetaSignal
    lastPaginationOptionsUsedSig = this.paginationService.getLastPaginationOptionsUsedSig

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
        { page, limit, order, orderByColumn, searchQuery, searchBy, startByOrContain }: PaginationOptionsType
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
}
