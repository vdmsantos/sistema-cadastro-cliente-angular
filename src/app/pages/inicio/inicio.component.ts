import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { APP_ROUTE_PATHS } from '../../app-routing.module';
import { ClienteService } from '../../services/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditComponent } from '../../components/dialog-edit/dialog-edit.component';
import { ClienteEntity } from '../../entities/cliente.entity';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    constructor(
        private clienteService: ClienteService,
        private dialog: MatDialog,
    ) {
        console.log('clientesSortedByCriadoEm', this.last5ClientesAddedSignal())
    }
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
