import { Component, EventEmitter, Output } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { PrimeIcons } from 'primeng/api';
import { StartByOrContainEnum } from '../../types/paginationTypes/start-by-or-contain.enum';
import { SearchByEnum } from '../../types/paginationTypes/search-by.enum';
import { PaginationService } from '../../services/pagination.service';

type EmitEventParam = {
    page: number | undefined,
    searchQuery: string | undefined,
    searchBy: SearchByEnum | undefined,
    startByOrContain: StartByOrContainEnum | undefined,
}

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
    PrimeIcons = PrimeIcons
    StartByOrContainEnum = StartByOrContainEnum

    constructor(
        private clienteService: ClienteService,
        private paginationService: PaginationService,
    ) { }
    @Output() onSubmit: EventEmitter<EmitEventParam> = new EventEmitter();
    searchQuery = this.paginationService.getLastPaginationOptionsUsedSig().searchQuery
    searchBy = this.paginationService.getLastPaginationOptionsUsedSig().searchBy
    startByOrContain = this.paginationService.getLastPaginationOptionsUsedSig().startByOrContain

    emitEvent(params = {
        page: 1,
        searchQuery: this.searchQuery,
        searchBy: this.searchBy,
        startByOrContain: this.startByOrContain
    } as EmitEventParam
    ) {
        this.onSubmit.emit(params)
    }
}
