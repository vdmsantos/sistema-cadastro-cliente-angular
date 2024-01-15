import { Component, OnInit, signal } from '@angular/core';
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
        setInterval(() => {
            this.createDateDisplay()
        }, 500)
    }
    PrimeIcons = PrimeIcons
    APP_ROUTE_PATHS = APP_ROUTE_PATHS

    last5ClientesAddedSignal = this.clienteService.last5ClientesAddedSignal
    currentDateSignal = signal<string>(this.createDateDisplay())

    createDateDisplay() {
        const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', "Mai", "Jun", "Jul", "Ago", 'Set', 'Out', 'Nov', 'Dez']
        const day = new Date().getDate()
        const month = months[new Date().getMonth()]
        const weekDay = weekDays[new Date().getDay()]
        const year = new Date().getFullYear()
        const hourMinSec = new Date().toLocaleString().split(', ')[1]

        const formattedDateString = `${weekDay} ${day}, ${month} ${year}, ${hourMinSec}`
        this.currentDateSignal?.set(formattedDateString)
        return formattedDateString
    }

    openEditDialog(clienteEntity: ClienteEntity) {
        this.dialog.open(DialogEditComponent, {
            maxWidth: '100dvw',
            data: {
                clienteEntity
            }
        })
    }
}
