import { Injectable, computed, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProdutoEntity } from '../entities/produto.entity';
import { ProductPaginationOptionsType } from '../types/paginationTypes/pagination-options.type';
import { ProdutoPaginationService } from './produto-pagination.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private paginationService: ProdutoPaginationService,
  ) { }

  private getAllProdutosList = this.localStorageService.getProdutoList.bind(this.localStorageService)

  private paginatedProdutosListSignal = signal<ProdutoEntity[]>(this.getAllProdutosList() || [])

  public getProdutosListSignal = computed(this.paginatedProdutosListSignal)

  public fetchProdutosList({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain }: ProductPaginationOptionsType = {} as ProductPaginationOptionsType) {
    this.paginationService.setLastPaginationOptionsUsedSig({ limit, order, orderByColumn, searchQuery, searchBy, page, startByOrContain });
    let produtos = this.getAllProdutosList();
    produtos = this.paginationService.paginateProdutoList(produtos);
    this.paginatedProdutosListSignal?.set(produtos);
    return produtos;
  }

  public deleteById(produtoId: string) {
    const produtoListWithoutProduto = this.getAllProdutosList().filter(produto => produto.id !== produtoId);
    this.localStorageService.setProdutoStorage(produtoListWithoutProduto);
    this.fetchProdutosList();
  }

  public createOrUpdate(newProdutoData: ProdutoEntity) {
    const produtoFound = this.getAllProdutosList().find(produto => produto.id === newProdutoData.id);
    if (!produtoFound) {
      this.createProduto(newProdutoData);
      this.showToastMessage('success', 'Produto criado com sucesso.');
    } else {
      this.updateProduto(newProdutoData, produtoFound);
      this.showToastMessage('success', 'Produto atualizado com sucesso.');
    }
    this.fetchProdutosList();
  }

  public clearProdutoList() {
    this.localStorageService.clearProdutoList();
    this.fetchProdutosList({ page: 1 });
    this.showToastMessage('success', 'Lista esvaziada com sucesso.');
  }

  private createProduto(newProduto: ProdutoEntity) {
    const allProdutosList = this.getAllProdutosList();
    allProdutosList.push(newProduto);
    this.localStorageService.setProdutoStorage(allProdutosList);
  }

  private updateProduto(newProdutoData: ProdutoEntity, produtoFound: ProdutoEntity) {
    let allProdutosList = this.getAllProdutosList();
    const produtoFoundIndex = this.getAllProdutosList().findIndex(produto => produto.id === produtoFound.id);
    allProdutosList[produtoFoundIndex] = newProdutoData;
    this.localStorageService.setProdutoStorage(allProdutosList);
  }

  private showToastMessage(severity: 'success' | 'error', message: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: severity,
      summary: message,
    });
  }
}
