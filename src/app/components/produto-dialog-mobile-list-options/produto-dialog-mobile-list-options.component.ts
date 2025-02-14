import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ProdutoService } from '../../services/produto.service';
import { ProductPaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';

@Component({
  selector: 'app-produto-dialog-mobile-list-options',
  templateUrl: './produto-dialog-mobile-list-options.component.html',
  styleUrls: ['./produto-dialog-mobile-list-options.component.scss']
})
export class ProdutoDialogMobileListOptionsComponent implements OnInit {
    constructor(
        private produtoService: ProdutoService,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) { }

    PrimeIcons = PrimeIcons

    ngOnInit() {
        this.closeDialogOnBrowserBackNavigation()
    }

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
        })
    }

    closeDialogOnBrowserBackNavigation() {
        // https://stackoverflow.com/a/58077214/19709090
        if (isPlatformBrowser(this.platformId)) {
            history.pushState({}, document.getElementsByTagName('title')[0].innerHTML, window.location.href);
        }
    }
}
