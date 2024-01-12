import { Component, Inject } from '@angular/core';
import { ClienteEntity } from '../../entities/cliente.entity';
import { MessageService, PrimeIcons } from 'primeng/api';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../../services/cliente.service';

@Component({
    selector: 'app-dialog-delete',
    templateUrl: './dialog-delete.component.html',
    styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent {
    constructor(
        private messageService: MessageService,
        private clienteService: ClienteService,
        @Inject(MAT_DIALOG_DATA) public dialogData: { clienteEntity: ClienteEntity },
    ) { }

    id = this.dialogData.clienteEntity.id
    firstName = this.dialogData.clienteEntity.nome.split(' ')[0]
    PrimeIcons = PrimeIcons

    deleteClienteById() {
        this.clienteService.deleteById(this.id)
        this.showToastMessage('success', `Cliente ${this.firstName} excluído com sucesso.`)
        // .pipe(
        // 	take(1),
        // 	tap(res => {
        // 		if (res.status === 'success') this.showToastMessage('success', 'Beneficiária excluída com sucesso.')
        // 		else this.showToastMessage('error', 'Houve um erro ao excluir a beneficiária.')
        // 	})
        // ).subscribe()
    }

    showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }
}
