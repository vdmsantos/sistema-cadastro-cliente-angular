import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService, PrimeIcons } from 'primeng/api';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteService } from '../../services/cliente.service';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-dialog-edit',
    templateUrl: './dialog-edit.component.html',
    styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnDestroy {
    constructor(
        private messageService: MessageService,
        private clienteService: ClienteService,
        private clienteFormService: ClienteFormService,
        @Inject(MAT_DIALOG_DATA) public dialogData: { clienteEntity: ClienteEntity },
    ) {
        this.clienteFormService.setClienteForm(this.dialogData.clienteEntity)
    }

    PrimeIcons = PrimeIcons

    ngOnDestroy(): void {
        this.clienteFormService.setClienteForm()
    }


}
