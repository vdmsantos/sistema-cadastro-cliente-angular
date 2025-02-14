import { Component } from '@angular/core';
import { ProdutoEntity } from 'src/app/entities/produto.entity';
import { ProdutoFormFields } from 'src/app/services/produto-form.service';
import { ProdutoPaginationService } from 'src/app/services/produto-pagination.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { ProductPaginationOptionsType } from 'src/app/types/paginationTypes/pagination-options.type';

@Component({
    selector: 'app-listar-pedido',
    templateUrl: './listar-pedido.component.html',
    styleUrls: ['./listar-pedido.component.scss'],
})
export class ListarPedidoComponent {
    constructor(
        private produtoService: ProdutoService,
        private paginationService: ProdutoPaginationService
    ) {}

    ngOnInit(): void {
        this.fetchProdutosList();
    }

    produtosListSignal = this.produtoService.getProdutosListSignal;
    paginationMetaSignal = this.paginationService.getPaginationMetaSignal;
    lastPaginationOptionsUsedSig =
        this.paginationService.getLastPaginationOptionsUsedSig;

    list_tableFields: { label: string; column: string }[] = [
        {
            column: ProdutoFormFields.nome,
            label: 'Nome',
        },
        {
            column: ProdutoFormFields.descricao,
            label: 'Descrição',
        },
        {
            column: ProdutoFormFields.preco,
            label: 'Preço',
        },
        {
            column: ProdutoFormFields.criado_em,
            label: 'Data de criação',
        },
    ];

    fetchProdutosList({
        page,
        limit,
        order,
        orderByColumn,
        searchQuery,
        searchBy,
        startByOrContain,
    }: ProductPaginationOptionsType = {}) {
        return this.produtoService.fetchProdutosList({
            page: page,
            limit: limit,
            orderByColumn: orderByColumn,
            order: order,
            searchQuery: searchQuery,
            searchBy: searchBy,
            startByOrContain: startByOrContain,
        });
    }

    getListItems(produtos: ProdutoEntity[]) {
        return produtos.map((item) => {
            return {
                ...item,
                preco: item.preco ? `R$ ${item.preco}` : 'R$ 0,00',
            };
        });
    }
}
