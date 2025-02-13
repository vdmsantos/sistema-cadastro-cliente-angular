import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ProductPaginationOptionsType } from '../../../../types/paginationTypes/pagination-options.type';
import { MatDialog } from '@angular/material/dialog';
import { DialogMobileListOptionsComponent } from '../../../../components/dialog-mobile-list-options/dialog-mobile-list-options.component';
import { ProdutoService } from '../../../../services/produto.service';

@Component({
    selector: 'app-produto-search-config',
    templateUrl: './produto-search-config.component.html',
    styleUrls: ['./produto-search-config.component.scss']
})
export class ProdutoSearchConfigComponent {
    constructor(
        private dialog: MatDialog,
        private produtoService: ProdutoService,
    ) { }

    PrimeIcons = PrimeIcons

    fetchProdutosList(paginationOptions: ProductPaginationOptionsType) {
        this.produtoService.fetchProdutosList(paginationOptions)
    }

    openSearchConfigDialog() {
        this.dialog.open(DialogMobileListOptionsComponent, {
            maxWidth: `100vw`,
        })
    }
}
