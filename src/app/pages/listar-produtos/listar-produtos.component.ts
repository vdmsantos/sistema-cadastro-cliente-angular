import { Component, OnInit } from '@angular/core';
import { ProdutoEntity } from '../../entities/produto.entity';
import { ProdutoService } from '../../services/produto.service';
import { ProductPaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';
import { ProdutoPaginationService } from '../../services/produto-pagination.service';
import { ProdutoFormFields } from '../../services/produto-form.service';

@Component({
    selector: 'app-listar-produtos',
    templateUrl: './listar-produtos.component.html',
    styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {
    constructor(
        private produtoService: ProdutoService,
        private paginationService: ProdutoPaginationService,
    ) { }

    ngOnInit(): void {
        this.fetchProdutosList();
    }

    produtosListSignal = this.produtoService.getProdutosListSignal;
    paginationMetaSignal = this.paginationService.getPaginationMetaSignal;
    lastPaginationOptionsUsedSig = this.paginationService.getLastPaginationOptionsUsedSig;

    list_tableFields: { label: string, column: string }[] = [
        {
            column: ProdutoFormFields.nome,
            label: 'Nome'
        },
        {
            column: ProdutoFormFields.descricao,
            label: 'Descrição'
        },
        {
            column: ProdutoFormFields.preco,
            label: 'Preço'
        },
        {
            column: ProdutoFormFields.criado_em,
            label: 'Data de criação'
        },
    ];

    fetchProdutosList(
        { page, limit, order, orderByColumn, searchQuery, searchBy, startByOrContain }: ProductPaginationOptionsType = {}
    ) {
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
        return produtos.map(item => {
            return {
                ...item,
                preco: item.preco,
            };
        });
    }
}
