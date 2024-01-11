import { Component, Signal } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { Endereco } from '../../types/endereco.interface';
import { HelperService } from '../../services/helper.service';
import { ClienteService } from '../../services/cliente.service';
import { OrderByColumnEnum } from '../../types/paginationTypes/order-by-column.enum';
import { OrderEnum } from '../../types/paginationTypes/order.enum';
import { PaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';

@Component({
    selector: 'app-listar-clientes',
    templateUrl: './listar-clientes.component.html',
    styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent {
    constructor(
        private clienteService: ClienteService
    ) { }

    clientesListSignal = this.clienteService.getClientesListSignal

    list_tableFields: {
        label: string;
        column: string;
    }[] = [
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
                atualizado_em: new Date(item.atualizado_em).toLocaleString(),
                criado_em: new Date(item.criado_em).toLocaleString(),
                rua: item.endereco.rua,
                bairro: item.endereco.bairro,
                cep: item.endereco.cep,
                cidade: item.endereco.cidade,
                estado: item.endereco.estado,
                numero: item.endereco.numero,
            }
        })
    }

    list_items = this.clienteService.fetchClientesList().map(item => {
        return {
            ...item,
            atualizado_em: new Date(item.atualizado_em).toLocaleString(),
            criado_em: new Date(item.criado_em).toLocaleString(),
            rua: item.endereco.rua,
            bairro: item.endereco.bairro,
            cep: item.endereco.cep,
            cidade: item.endereco.cidade,
            estado: item.endereco.estado,
            numero: item.endereco.numero,
        }
    })
}
