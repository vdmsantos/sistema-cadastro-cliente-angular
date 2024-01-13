import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ClienteService } from '../../services/cliente.service';
import { PaginationOptionsType } from '../../types/paginationTypes/pagination-options.type';

@Component({
    selector: 'app-dialog-mobile-list-options',
    templateUrl: './dialog-mobile-list-options.component.html',
    styleUrls: ['./dialog-mobile-list-options.component.scss']
})
export class DialogMobileListOptionsComponent implements OnInit {
    constructor(
        private clienteService: ClienteService,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) { }

    PrimeIcons = PrimeIcons

    ngOnInit() {
        this.closeDialogOnBrowserBackNavigation()
    }

    fetchClientesList(
        { page, limit, order, orderByColumn, searchQuery, searchBy, startByOrContain }: PaginationOptionsType = {}
    ) {
        return this.clienteService.fetchClientesList({
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
