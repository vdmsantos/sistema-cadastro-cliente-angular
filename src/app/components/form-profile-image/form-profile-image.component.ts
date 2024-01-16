import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { DialogImagePickerComponent } from '../dialog-image-picker/dialog-image-picker.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-form-profile-image',
    templateUrl: './form-profile-image.component.html',
    styleUrls: ['./form-profile-image.component.scss']
})
export class FormProfileImageComponent {
    constructor(
        public clienteformService: ClienteFormService,
        public dialog: MatDialog,
    ) { }


    clienteFormGroup = this.clienteformService.getClienteFormGroup()
    getClienteFormControl = this.clienteformService.getClienteFormControl.bind(this.clienteformService);
    getClienteEnderecoFormControl = this.clienteformService.getClienteEnderecoFormControl.bind(this.clienteformService);

    PrimeIcons = PrimeIcons
    openDialogImagePicker() {
        this.dialog.open(DialogImagePickerComponent, {
            maxWidth: `100dvw`
        })
    }
}
