import { Component } from '@angular/core';
import { ProdutoFormService } from '../../services/produto-form.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {
  constructor(
    private produtoFormService: ProdutoFormService,
  ) { }

  produtoFormGroup = this.produtoFormService.getProdutoFormGroup();
  getProdutoFormControl = this.produtoFormService.getProdutoFormControl.bind(this.produtoFormService);
  PrimeIcons = PrimeIcons;

  submitForm() {
    this.produtoFormService.submit();
  }
}
