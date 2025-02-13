import { Component, EventEmitter, Output } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { StartByOrContainEnum } from '../../types/paginationTypes/start-by-or-contain.enum';
import { SearchProductByEnum } from '../../types/paginationTypes/search-by.enum';
import { ProdutoPaginationService } from '../../services/produto-pagination.service';

type EmitEventParam = {
  page: number | undefined,
  searchQuery: string | undefined,
  searchBy: SearchProductByEnum | undefined,
  startByOrContain: StartByOrContainEnum | undefined,
}

@Component({
  selector: 'app-produto-input-search',
  templateUrl: './produto-input-search.component.html',
  styleUrls: ['./produto-input-search.component.scss']
})
export class ProdutoInputSearchComponent {
  PrimeIcons = PrimeIcons
  StartByOrContainEnum = StartByOrContainEnum

  constructor(
    private paginationService: ProdutoPaginationService,
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
