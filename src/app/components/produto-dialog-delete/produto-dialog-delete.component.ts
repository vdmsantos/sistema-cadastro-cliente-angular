import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProdutoEntity } from '../../entities/produto.entity';
import { MessageService, PrimeIcons } from 'primeng/api';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from '../../services/produto.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-produto-dialog-delete',
  templateUrl: './produto-dialog-delete.component.html',
  styleUrls: ['./produto-dialog-delete.component.scss']
})
export class ProdutoDialogDeleteComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private produtoService: ProdutoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(MAT_DIALOG_DATA) public dialogData: { produtoEntity: ProdutoEntity },
  ) { }

  id = this.dialogData.produtoEntity.id
  firstName = this.dialogData.produtoEntity.nome.split(' ')[0]
  PrimeIcons = PrimeIcons

  deleteProdutoById() {
    this.produtoService.deleteById(this.id)
    this.produtoService.fetchProdutosList()
    this.showToastMessage('success', `Produto ${this.firstName} excluído com sucesso.`)
  }

  showToastMessage(severity: 'success' | 'error', message: string) {
    this.messageService.add({
      severity: severity,
      summary: message,
    });
  }

  ngOnInit() {
    this.closeDialogOnBrowserBackNavigation()
  }

  closeDialogOnBrowserBackNavigation() {
    // https://stackoverflow.com/a/58077214/19709090
    if (isPlatformBrowser(this.platformId)) {
      history.pushState({}, document.getElementsByTagName('title')[0].innerHTML, window.location.href);
    }
  }
}
