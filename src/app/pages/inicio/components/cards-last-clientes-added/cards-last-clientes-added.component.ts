import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ClienteService } from '../../../../services/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { APP_ROUTE_PATHS } from '../../../../app-routing.module';
import { ClienteEntity } from '../../../../entities/cliente.entity';
import { DialogEditComponent } from '../../../../components/dialog-edit/dialog-edit.component';

@Component({
    selector: 'app-cards-last-clientes-added',
    templateUrl: './cards-last-clientes-added.component.html',
    styleUrls: ['./cards-last-clientes-added.component.scss']
})
export class CardsLastClientesAddedComponent {
    constructor(
        private clienteService: ClienteService,
        private dialog: MatDialog,
    ) { }
    PrimeIcons = PrimeIcons
    APP_ROUTE_PATHS = APP_ROUTE_PATHS

    last5ClientesAddedSignal = this.clienteService.last5ClientesAddedSignal

    openEditDialog(clienteEntity: ClienteEntity) {
        this.dialog.open(DialogEditComponent, {
            maxWidth: '100dvw',
            data: {
                clienteEntity
            }
        })
    }
}
