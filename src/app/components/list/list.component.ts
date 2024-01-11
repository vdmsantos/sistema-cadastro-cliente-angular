import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService, ConfirmationService, PrimeIcons } from 'primeng/api';
import { take, tap } from 'rxjs';
import { APP_ROUTE_PATHS } from '../../app-routing.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges, OnInit {
    constructor(
        private dialog: MatDialog,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private clienteService: ClienteFormService,
    ) { }
    /**
     * 	Itens a serem exibidos. Não pode ter itens nested.
     *
     *  Ex: [{nome:'Rodrigo', rua:'Abacate'}]
     */
    @Input({ required: true }) list_items!: ClienteEntity[] | any[]
    /**
     * 	Lista com o label do header e a coluna respectiva a ser exibida.
     *
     * 	Ex: [{label:'Nome',column:'nome'}, {label:'Data de nascimento',column:'data_nascimento'} ,...]
     */
    @Input({ required: true }) list_tableFields!: { label: string, column: string; }[]
    @Input() list_hasActionButtons: boolean = true
    listHeaderItems!: string[]
    dialogRef!: MatDialogRef<any>;
    objectKeysInOrder = this.list_tableFields?.map(data => data.column)
    headerItems = this.list_tableFields?.map(data => data.label)
    PrimeIcons = PrimeIcons

    ngOnInit(): void {
        this.listHeaderItems = this.list_tableFields?.map(data => data.label)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['list_tableFields']) {
            this.objectKeysInOrder = this.list_tableFields?.map(data => data.column)
            this.headerItems = this.list_tableFields?.map(data => data.label)
        }
    }

    verificarTextoNenhum(texto: string) {
        if (texto === 'nenhum' || !texto) return 'color:tomato'
        else return ''
    }

    abrirGerarPDFDialog(clienteEntity: ClienteEntity) {
        // this.dialogRef = this.dialog.open(GerarPdfComponent, {
        // 	height: 'auto',
        // 	width: 'fit', panelClass: 'rounded-[0.75rem]',
        // 	disableClose: false,
        // 	data: {
        // 		fecharGerarPDFDialog: this.dialogRef?.close,
        // 		clienteEntity
        // 	}
        // });
    }

    confirmarExclusao(event: Event, clienteEntity: ClienteEntity) {
        this.confirmationService.confirm({
            target: event.target!,
            message: `Excluir ${clienteEntity.nome.split(' ')[0]}?`,
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: 'px-4',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            rejectButtonStyleClass: 'px-4',
            accept: () => {
                this.excluirGestante(clienteEntity.id)
            },
            reject: () => { }
        });
    }

    excluirGestante(clienteId: string) {
        // this.clienteService.excluir(gestanteId)
        // 	.pipe(
        // 		take(1),
        // 		tap(res => {
        // 			if (res.status === 'success') this.showToastMessage('success', 'Beneficiária excluída com sucesso.')
        // 			else this.showToastMessage('error', 'Houve um erro ao excluir a beneficiária.')
        // 		})
        // 	).subscribe()
    }

    showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }

}
