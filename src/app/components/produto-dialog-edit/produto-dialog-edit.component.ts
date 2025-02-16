import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PrimeIcons } from 'primeng/api';
import { ProdutoEntity } from '../../entities/produto.entity';
import { ProdutoFormService } from '../../services/produto-form.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-produto-dialog-edit',
  templateUrl: './produto-dialog-edit.component.html',
  styleUrls: ['./produto-dialog-edit.component.scss']
})
export class ProdutoDialogEditComponent implements OnDestroy, OnInit {
  constructor(
    private dialogRef: MatDialogRef<ProdutoDialogEditComponent>,
    private produtoFormService: ProdutoFormService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(MAT_DIALOG_DATA) public dialogData: { produtoEntity: ProdutoEntity },
  ) {
    this.produtoFormService.setProdutoForm(this.dialogData.produtoEntity)
  }

  PrimeIcons = PrimeIcons

  ngOnDestroy(): void {
    this.produtoFormService.setProdutoForm()
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
