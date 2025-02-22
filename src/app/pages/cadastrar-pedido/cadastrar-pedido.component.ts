import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoPaginationService } from 'src/app/services/produto-pagination.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-cadastrar-pedido',
    templateUrl: './cadastrar-pedido.component.html',
    styleUrls: ['./cadastrar-pedido.component.scss'],
})
export class CadastrarPedidoComponent {
    constructor(
        private produtoService: ProdutoService,
        private clienteService: ClienteService
    ) {}
    produtosListSignal = this.produtoService.getProdutosListSignal;
    clientesListSignal = this.clienteService.getClientesListSignal;
}
