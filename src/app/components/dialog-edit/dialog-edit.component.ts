import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PrimeIcons } from 'primeng/api';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteFormService } from '../../services/cliente-form.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-dialog-edit',
    templateUrl: './dialog-edit.component.html',
    styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnDestroy, OnInit {
    constructor(
        private dialogRef: MatDialogRef<DialogEditComponent>,
        private clienteFormService: ClienteFormService,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(MAT_DIALOG_DATA) public dialogData: { clienteEntity: ClienteEntity },
    ) {
        this.clienteFormService.setClienteForm(this.dialogData.clienteEntity)
    }

    PrimeIcons = PrimeIcons

    ngOnDestroy(): void {
        this.clienteFormService.setClienteForm()
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
