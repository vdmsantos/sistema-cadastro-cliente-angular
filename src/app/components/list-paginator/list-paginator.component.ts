import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PaginationMeta } from '../../types/paginationTypes/pagination-options.type';
import { PrimeIcons } from 'primeng/api';
import { LimitEnum } from '../../types/paginationTypes/limit.enum';

@Component({
    selector: 'app-list-paginator',
    templateUrl: './list-paginator.component.html',
    styleUrls: ['./list-paginator.component.scss']
})
export class ListPaginatorComponent implements AfterViewInit, OnChanges {
    constructor() { }

    @Output() atualizarConsulta: EventEmitter<any> = new EventEmitter();
    @Input({ required: true }) paginationMeta!: PaginationMeta
    @Input() limit: number | string = 50
    currentPage!: number
    totalPages!: number
    totalResults!: number
    loading = false
    PrimeIcons = PrimeIcons
    LimitEnum = LimitEnum

    ngAfterViewInit(): void {
        this.updatePaginationMeta()
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['paginationMeta']) this.updatePaginationMeta()
    }

    updatePaginationMeta() {
        this.currentPage = this.paginationMeta?.currentPage
        this.totalPages = this.paginationMeta?.totalPages
        this.totalResults = this.paginationMeta?.totalItems
        this.loading = false
    }

    sendEventToParent({ page }: { page: number }): void {
        this.loading = true
        this.atualizarConsulta.emit({
            limit: this.limit,
            currentPage: page
        });
    }
}
