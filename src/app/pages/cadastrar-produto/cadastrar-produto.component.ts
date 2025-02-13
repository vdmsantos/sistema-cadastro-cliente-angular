import { Component } from '@angular/core';
import { ProdutoFormService } from '../../services/produto-form.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})

export class CadastrarProdutoComponent {
  constructor(
    public produtoformService: ProdutoFormService,
  ) { }

  submitForm() {
    this.produtoformService.submit()
  }
}
