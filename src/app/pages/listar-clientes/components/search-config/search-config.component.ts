import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { PaginationOptionsType } from '../../../../types/paginationTypes/pagination-options.type';
import { MatDialog } from '@angular/material/dialog';
import { DialogMobileListOptionsComponent } from '../../../../components/dialog-mobile-list-options/dialog-mobile-list-options.component';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
    selector: 'app-search-config',
    templateUrl: './search-config.component.html',
    styleUrls: ['./search-config.component.scss']
})
export class SearchConfigComponent {
    constructor(
        private dialog: MatDialog,
        private clienteService: ClienteService,
    ) { }

    PrimeIcons = PrimeIcons

    fetchClientesList(paginationOptions: PaginationOptionsType) {
        this.clienteService.fetchClientesList(paginationOptions)
    }

    openSearchConfigDialog() {
        this.dialog.open(DialogMobileListOptionsComponent, {
            maxWidth: `100vw`,
        })
    }
}
