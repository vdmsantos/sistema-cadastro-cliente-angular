import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ClienteEntity } from '../../../../entities/cliente.entity';
import { ClienteService } from '../../../../services/cliente.service';
import { HelperService } from '../../../../services/helper.service';

@Component({
    selector: 'app-button-add-10-clientes',
    templateUrl: './button-add-10-clientes.component.html',
    styleUrls: ['./button-add-10-clientes.component.scss']
})
export class ButtonAdd10ClientesComponent {
    constructor(
        private clienteService: ClienteService,
        private helperService: HelperService,
    ) { }

    PrimeIcons = PrimeIcons

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
        this.clienteService.fetchClientesList()
    }
}
