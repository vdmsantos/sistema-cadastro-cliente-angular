import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProdutoEntity } from '../../entities/produto.entity';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { ProdutoFormFields } from '../../services/produto-form.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})

export class ProdutoListComponent implements OnChanges, OnInit {
    constructor(
        private dialog: MatDialog,
    ) { }
    /**
     * 	Itens a serem exibidos. Não pode ter itens nested.
     *
     *  Ex: [{nome:'Rodrigo', rua:'Abacate'}]
     */
    @Input({ required: true }) list_items!: ProdutoEntity[] | any[]
    listItemsToDisplay: ProdutoEntity[] | any[] = []
    /**
     * 	Lista com o label do header e a coluna respectiva a ser exibida.
     *
     * 	Ex: [{label:'Nome',column:'nome'}, {label:'Data de nascimento',column:'data_nascimento'} ,...]
     */
    @Input({ required: true }) list_tableFields!: { label: string, column: string; }[]
    @Input() list_hasActionButtons: boolean = true
    objectKeysInOrder = this.list_tableFields?.map(data => data.column)
    dialogRef!: MatDialogRef<DialogDeleteComponent | DialogEditComponent>;
    PrimeIcons = PrimeIcons
    ProdutoFormFields = ProdutoFormFields
    PAGE_TEXT = {
        CLIENTE_EMPTY_LIST: 'Nenhum cliente encontrado.',
        EDIT_BUTTON_TOOLTIP: 'Editar',
        DELETE_BUTTON_TOOLTIP: 'Excluir',
    }

    ngOnInit(): void {
        this.setObjectKeysInOrder()
        this.setItemsToDisplay()
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['list_tableFields']) {
            this.setObjectKeysInOrder()
        }
        if (changes['list_items']) {
            this.setItemsToDisplay()
        }
    }

    setObjectKeysInOrder() {
        this.objectKeysInOrder = this.list_tableFields?.map(data => data.column)
    }

    setItemsToDisplay() {
        this.listItemsToDisplay = JSON.parse(JSON.stringify(this.list_items))

        this.listItemsToDisplay.map((item: ProdutoEntity) => {
            item.criado_em = new Date(item.criado_em).toLocaleString()
            item.atualizado_em = new Date(item.atualizado_em).toLocaleString()
            return item as any
        })
    }

    verificarTextoNenhum(texto: string, key?: string) {
        if ((texto === 'nenhum' || !texto) && key !== ProdutoFormFields.image_profile_url) return 'color:tomato'
        else return ''
    }

    openEditDialog(clienteEntity: ProdutoEntity) {
        this.dialogRef = this.dialog.open(DialogEditComponent, {
            height: 'auto',
            width: 'fit',
            maxWidth: `100vw`,
            panelClass: 'rounded-[0.75rem]',
            disableClose: false,
            data: {
                fecharGerarPDFDialog: this.dialogRef?.close,
                clienteEntity
            }
        });
    }

    openDeleteDialog(clienteEntity: ProdutoEntity) {
        this.dialogRef = this.dialog.open(DialogDeleteComponent, {
            height: 'auto',
            width: 'fit', panelClass: 'rounded-[0.75rem]',
            disableClose: false,
            data: {
                clienteEntity
            }
        });
    }

}
