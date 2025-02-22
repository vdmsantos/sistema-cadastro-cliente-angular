import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

import { ProdutoFormService } from '../../services/produto-form.service';
import { UnidadeMedida } from '../../entities/produto.entity';

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

  unidadesMedida = [
    { label: 'Unidade (UN)', value: UnidadeMedida.UN },
    { label: 'Quilograma (kg)', value: UnidadeMedida.KG },
    { label: 'Litro (L)', value: UnidadeMedida.L }
  ];

  submitForm() {
    this.produtoFormService.submit();
  }
}
