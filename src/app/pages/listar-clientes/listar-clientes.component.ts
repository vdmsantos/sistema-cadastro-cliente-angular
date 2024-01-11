import { Component } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { Endereco } from '../../types/endereco.interface';
import { HelperService } from '../../services/helper.service';

@Component({
    selector: 'app-listar-clientes',
    templateUrl: './listar-clientes.component.html',
    styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent {
    constructor(
        private helperService: HelperService
    ) { }

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

    clientes = [
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
            nome: 'Joaquim Maio',
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


    clientesVazio = [] as ClienteEntity[]

    list_items = this.clientes.map(item => {
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
