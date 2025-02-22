import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ProdutoDialogImagePickerComponent } from '../produto-dialog-image-picker/produto-dialog-image-picker.component';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoFormService } from '../../services/produto-form.service';

@Component({
  selector: 'app-form-produto-image',
  templateUrl: './form-produto-image.component.html',
  styleUrls: ['./form-produto-image.component.scss']
})
export class FormProdutoImageComponent {
    constructor(
        public produtoformService: ProdutoFormService,
        public dialog: MatDialog,
    ) { }


    produtoFormGroup = this.produtoformService.getProdutoFormGroup()
    getProdutoFormControl = this.produtoformService.getProdutoFormControl.bind(this.produtoformService);

    PrimeIcons = PrimeIcons
    openDialogImagePicker() {
        this.dialog.open(ProdutoDialogImagePickerComponent, {
            maxWidth: `100dvw`
        })
    }
}
