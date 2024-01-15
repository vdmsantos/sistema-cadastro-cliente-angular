import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
    selector: 'app-button-clear-clientes-list',
    templateUrl: './button-clear-clientes-list.component.html',
    styleUrls: ['./button-clear-clientes-list.component.scss']
})
export class ButtonClearClientesListComponent {

    constructor(
        private clienteService: ClienteService,
    ) { }

    PrimeIcons = PrimeIcons

    clearClienteList() {
        this.clienteService.clearClienteList()
    }
}
