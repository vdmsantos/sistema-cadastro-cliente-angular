import { Injectable, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from './helper.service';
import { ProdutoEntity } from '../entities/produto.entity';
import { MessageService } from 'primeng/api';
import { ProdutoService } from './produto.service';

export const ProdutoFormFields = {
    id: "id",
    nome: "nome",
    descricao: "descricao",
    preco: "preco",
    criado_em: "criado_em",
    atualizado_em: "atualizado_em",
    image_profile_url: "image_profile_url"
} as const;

class ProdutoFormType {
    [ProdutoFormFields.id]!: FormControl<string>;
    [ProdutoFormFields.nome]!: FormControl<string>;
    [ProdutoFormFields.descricao]!: FormControl<string>;
    [ProdutoFormFields.preco]!: FormControl<string>;
    [ProdutoFormFields.criado_em]!: FormControl<string>;
    [ProdutoFormFields.atualizado_em]!: FormControl<string>;
    [ProdutoFormFields.image_profile_url]!: FormControl<string | null>;
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

    private CURRENT_UTC_DATE_ISO_STRING = new Date().toISOString();

    private produtoForm = this.createNewProdutoForm();
    private isSubmitedSignal = signal<boolean>(false);

    public getIsSubmitedSignal = computed(this.isSubmitedSignal);

    private createNewProdutoForm(produtoEntity?: ProdutoEntity) {
        return new FormGroup<ProdutoFormType>({
            id: new FormControl(produtoEntity?.id || this.helperService.newUUID(), { nonNullable: true, validators: [Validators.required] }),
            nome: new FormControl(produtoEntity?.nome || '', { nonNullable: true, validators: [Validators.required] }),
            descricao: new FormControl(produtoEntity?.descricao || '', { nonNullable: true, validators: [Validators.required] }),
            preco: new FormControl(produtoEntity?.preco || '', { nonNullable: true, validators: [Validators.required] }),
            criado_em: new FormControl(produtoEntity?.criado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            atualizado_em: new FormControl(produtoEntity?.atualizado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            image_profile_url: new FormControl(produtoEntity?.image_profile_url || '', {}),
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

        console.log('produtoForm', this.produtoForm);
        if (this.getProdutoFormGroup().invalid) {
            this.showToastMessage('error', 'Verifique os campos antes de salvar.');
            return;
        }

        const produtoFromForm = new ProdutoEntity({
            id: this.getProdutoFormControl('id').value,
            nome: this.getProdutoFormControl('nome').value,
            descricao: this.getProdutoFormControl('descricao').value,
            preco: this.getProdutoFormControl('preco').value,
            criado_em: this.getProdutoFormControl('criado_em').value,
            atualizado_em: this.getProdutoFormControl('atualizado_em').value,
            image_profile_url: this.getProdutoFormControl('image_profile_url').value,
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
