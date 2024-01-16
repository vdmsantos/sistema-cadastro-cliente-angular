import { Component, OnInit } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteService } from '../../services/cliente.service';
import { PaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';
import { PaginationService } from '../../services/pagination.service';
import { ClienteFormFields, EnderecoFormFields } from '../../services/cliente-form.service';

@Component({
    selector: 'app-listar-clientes',
    templateUrl: './listar-clientes.component.html',
    styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
    constructor(
        private clienteService: ClienteService,
        private paginationService: PaginationService,
    ) { }

    ngOnInit(): void {
        this.fetchClientesList()
    }

    clientesListSignal = this.clienteService.getClientesListSignal
    paginationMetaSignal = this.paginationService.getPaginationMetaSignal
    lastPaginationOptionsUsedSig = this.paginationService.getLastPaginationOptionsUsedSig

    list_tableFields: { label: string, column: string }[] = [
        {
            column: ClienteFormFields.image_profile_url,
            label: 'Foto de perfil'
        },
        {
            column: ClienteFormFields.nome,
            label: 'Nome'
        },
        {
            column: ClienteFormFields.cpf,
            label: 'CPF'
        },
        {
            column: ClienteFormFields.telefone,
            label: 'Telefone'
        },
        {
            column: ClienteFormFields.criado_em,
            label: 'Data de criação'
        },
        {
            column: ClienteFormFields.atualizado_em,
            label: 'Data de modificação'
        },
        {
            column: EnderecoFormFields.cep,
            label: 'CEP'
        },
        {
            column: EnderecoFormFields.estado,
            label: 'Estado'
        },
        {
            column: EnderecoFormFields.cidade,
            label: 'Cidade'
        },
        {
            column: EnderecoFormFields.bairro,
            label: 'Bairro'
        },
        {
            column: EnderecoFormFields.rua,
            label: 'Rua'
        },
        {
            column: EnderecoFormFields.numero,
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
}
