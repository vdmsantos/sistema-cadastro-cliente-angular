import { Injectable, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from './helper.service';

const EnderecoFormFields = {
    bairro: 'bairro',
    cep: 'cep',
    cidade: 'cidade',
    estado: 'estado',
    numero: 'numero',
    rua: 'rua',
} as const

export const ClienteFormFields = {
    id: "id",
    atualizado_em: "atualizado_em",
    cpf: 'cpf',
    criado_em: 'criado_em',
    endereco: 'endereco',
    nome: 'nome',
    telefone: 'telefone',
} as const

class ClienteFormType {
    [ClienteFormFields.id]!: FormControl<string>
    [ClienteFormFields.atualizado_em]!: FormControl<string>
    [ClienteFormFields.cpf]!: FormControl<string>
    [ClienteFormFields.criado_em]!: FormControl<string>
    [ClienteFormFields.endereco]!: FormGroup<EnderecoFormType>
    [ClienteFormFields.nome]!: FormControl<string>
    [ClienteFormFields.telefone]!: FormControl<string>
}

class EnderecoFormType {
    [EnderecoFormFields.bairro]!: FormControl<string>
    [EnderecoFormFields.cep]!: FormControl<string>
    [EnderecoFormFields.cidade]!: FormControl<string>
    [EnderecoFormFields.estado]!: FormControl<string>
    [EnderecoFormFields.numero]!: FormControl<string>
    [EnderecoFormFields.rua]!: FormControl<string>
}

@Injectable({
    providedIn: 'root'
})
export class ClienteFormService {
    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly helperService: HelperService,
    ) { }

    CURRENT_UTC_DATE_ISO_STRING = new Date().toISOString()

    private clienteForm = this.createNewClienteForm()
    // private enderecoForm = this.createNewEnderecoForm()
    private isSubmitedSignal = signal<boolean>(false)

    public getIsSubmitedSignal = computed(this.isSubmitedSignal)

    private createNewClienteForm() {
        return new FormGroup<ClienteFormType>({
            id: new FormControl(this.helperService.newUUID(), { nonNullable: true, validators: [Validators.required] }),
            criado_em: new FormControl(this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            atualizado_em: new FormControl(this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            cpf: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            telefone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            endereco: this.createNewEnderecoForm()
        })
    }

    private createNewEnderecoForm() {
        return new FormGroup<EnderecoFormType>({
            bairro: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            cep: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            cidade: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            estado: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            numero: new FormControl('', { nonNullable: true, validators: [] }),
            rua: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        })
    }

    public getClienteFormGroup() {
        return this.clienteForm
    }

    public getClienteFormControl(field: keyof typeof ClienteFormFields) {
        return this.clienteForm?.get(field) as FormControl<typeof field>
    }

    public getClienteEnderecoFormControl(field: keyof typeof EnderecoFormFields) {
        const enderecoFormGroup = this.clienteForm?.get(ClienteFormFields.endereco)
        return enderecoFormGroup?.get(field) as FormControl<typeof field>
    }

    public checkIfFormControlHasError(formControl: FormControl) {
        return formControl?.invalid && this.getIsSubmitedSignal()
    }

    public submit() {
        this.isSubmitedSignal.set(true)
        console.log('clienteForm', this.clienteForm)
    }
}
