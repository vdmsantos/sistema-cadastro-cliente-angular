import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { MessageService, PrimeIcons } from 'primeng/api';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../../services/cliente.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-dialog-delete',
    templateUrl: './dialog-delete.component.html',
    styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {
    constructor(
        private messageService: MessageService,
        private clienteService: ClienteService,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(MAT_DIALOG_DATA) public dialogData: { clienteEntity: ClienteEntity },
    ) { }

    id = this.dialogData.clienteEntity.id
    firstName = this.dialogData.clienteEntity.nome.split(' ')[0]
    PrimeIcons = PrimeIcons

    deleteClienteById() {
        this.clienteService.deleteById(this.id)
        this.clienteService.fetchClientesList()
        this.showToastMessage('success', `Cliente ${this.firstName} excluído com sucesso.`)
    }

    showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }

    ngOnInit() {
        this.closeDialogOnBrowserBackNavigation()
    }

    closeDialogOnBrowserBackNavigation() {
        // https://stackoverflow.com/a/58077214/19709090
        if (isPlatformBrowser(this.platformId)) {
            history.pushState({}, document.getElementsByTagName('title')[0].innerHTML, window.location.href);
        }
    }
}
