import { Injectable, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from './helper.service';
import { ProdutoEntity, UnidadeMedida } from '../entities/produto.entity';
import { MessageService } from 'primeng/api';
import { ProdutoService } from './produto.service';

export const ProdutoFormFields = {
    id: "id",
    nome: "nome",
    descricao: "descricao",
    unidade_medida: "unidade_medida",
    preco: "preco",
    quantidade_estoque: "quantidade_estoque",
    image_produto_url: "image_produto_url",
    criado_em: "criado_em",
    atualizado_em: "atualizado_em",
} as const;

class ProdutoFormType {
    [ProdutoFormFields.id]!: FormControl<string>;
    [ProdutoFormFields.nome]!: FormControl<string>;
    [ProdutoFormFields.descricao]!: FormControl<string>;
    [ProdutoFormFields.unidade_medida]!: FormControl<UnidadeMedida>;
    [ProdutoFormFields.preco]!: FormControl<number | null>;
    [ProdutoFormFields.quantidade_estoque]!: FormControl<number | null>;
    [ProdutoFormFields.image_produto_url]!: FormControl<string | null>
    [ProdutoFormFields.criado_em]!: FormControl<string>;
    [ProdutoFormFields.atualizado_em]!: FormControl<string>;
}

@Injectable({
    providedIn: 'root'
})
export class ProdutoFormService {
    constructor(
      private readonly produtoService: ProdutoService,
      private readonly helperService: HelperService,
      private readonly messageService: MessageService,
    ) { }

    unidadesMedida = [
        { label: 'Quilograma (kg)', value: UnidadeMedida.KG },
        { label: 'Litro (l)', value: UnidadeMedida.L },
        { label: 'Unidade (un)', value: UnidadeMedida.UN }
      ];

    private CURRENT_UTC_DATE_ISO_STRING = new Date().toISOString();

    private produtoForm = this.createNewProdutoForm();
    private isSubmitedSignal = signal<boolean>(false);

    public getIsSubmitedSignal = computed(this.isSubmitedSignal);

    private createNewProdutoForm(produtoEntity?: ProdutoEntity) {
        return new FormGroup<ProdutoFormType>({
            id: new FormControl(produtoEntity?.id || this.helperService.newUUID(), { nonNullable: true, validators: [Validators.required] }),
            nome: new FormControl(produtoEntity?.nome || '', { nonNullable: true, validators: [Validators.required] }),
            descricao: new FormControl(produtoEntity?.descricao || '', { nonNullable: true, validators: [Validators.required] }),
            unidade_medida: new FormControl(produtoEntity?.unidade_medida || UnidadeMedida.UN, { nonNullable: true, validators: [Validators.required] }),
            preco: new FormControl(produtoEntity?.preco ?? null, { nonNullable: true, validators: [Validators.required] }),
            quantidade_estoque: new FormControl(produtoEntity?.quantidade_estoque ?? null, { nonNullable: true, validators: [Validators.required] }),
            image_produto_url: new FormControl(produtoEntity?.image_produto_url || '', {}),
            criado_em: new FormControl(produtoEntity?.criado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            atualizado_em: new FormControl(produtoEntity?.atualizado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
        });
    }

    public getProdutoFormGroup() {
        return this.produtoForm;
    }

    public getProdutoFormControl(field: keyof typeof ProdutoFormFields) {
        return this.produtoForm?.get(field) as FormControl<string>;
    }

    public checkIfFormControlHasError(formControl: FormControl) {
        return formControl?.invalid && this.getIsSubmitedSignal();
    }

    public setProdutoForm(produtoEntity?: ProdutoEntity) {
        this.produtoForm = this.createNewProdutoForm(produtoEntity);
    }

    public submit() {
        this.isSubmitedSignal.set(true);

        if (this.getProdutoFormGroup().invalid) {
            this.showToastMessage('error', 'Verifique os campos antes de salvar.');
            return;
        }

        const produtoFromForm = new ProdutoEntity({
            id: this.getProdutoFormControl('id').value,
            nome: this.getProdutoFormControl('nome').value,
            descricao: this.getProdutoFormControl('descricao').value,
            unidade_medida: this.getProdutoFormControl('unidade_medida').value as UnidadeMedida,
            preco: Number(this.getProdutoFormControl('preco').value),
            quantidade_estoque: Number(this.getProdutoFormControl('quantidade_estoque').value),
            image_produto_url: this.getProdutoFormControl('image_produto_url').value,
            atualizado_em: new Date().toISOString(),
            criado_em: this.getProdutoFormControl('criado_em').value,
        });

        this.produtoService.createOrUpdate(produtoFromForm);
        this.isSubmitedSignal.set(false);
        this.setProdutoForm();
    }

    private showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }
}
