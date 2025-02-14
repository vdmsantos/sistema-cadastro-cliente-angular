import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { OrderEnum } from '../../types/paginationTypes/order.enum';
import { OrderProductByColumnEnum } from '../../types/paginationTypes/order-by-column.enum';
import { ProdutoPaginationService } from '../../services/produto-pagination.service';

interface EmittedEventType {
    orderByColumn: OrderProductByColumnEnum,
    order: OrderEnum,
}

@Component({
  selector: 'app-produto-list-sorter',
  templateUrl: './produto-list-sorter.component.html',
  styleUrls: ['./produto-list-sorter.component.scss']
})

export class ProdutoListSorterComponent {

  OrderEnum = OrderEnum
  PrimeIcons = PrimeIcons
  OrderByColumnEnum = OrderProductByColumnEnum

  constructor(
    private paginationService: ProdutoPaginationService,
  ) { }

  @Output() sorter_OnSort: EventEmitter<EmittedEventType> = new EventEmitter();
  orderByColumn = this.paginationService.getLastPaginationOptionsUsedSig().orderByColumn!
  order = this.paginationService.getLastPaginationOptionsUsedSig().order!

  emitirEvento() {
    this.sorter_OnSort.emit({
      orderByColumn: this.orderByColumn,
      order: this.order,
    })
  }
}
