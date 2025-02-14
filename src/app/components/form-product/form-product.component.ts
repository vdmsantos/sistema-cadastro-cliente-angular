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

  formatarPreco() {
    const precoControl = this.getProdutoFormControl('preco');
    let precoValue = precoControl?.value;

    if (precoValue) {
      // Remove tudo que não for número, preservando o ponto e a vírgula
      precoValue = precoValue.replace(/\D/g, '');

      // Adiciona separadores de milhar e vírgula para decimal
      let precoFormatado = precoValue.replace(/(\d)(\d{3})$/, '$1.$2'); // Milhar
      precoFormatado = precoFormatado.replace(/(\d)(\d{2})$/, '$1,$2'); // Decimal

      // Atualiza o valor do controle
      precoControl?.setValue(precoFormatado, { emitEvent: false });
    }
  }

  submitForm() {
    this.produtoFormService.submit();
  }
}
