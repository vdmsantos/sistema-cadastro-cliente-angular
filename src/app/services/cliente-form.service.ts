import { Injectable, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from './helper.service';
import { ClienteEntity } from '../entities/cliente.entity';
import { Endereco } from '../types/endereco.interface';
import { ClienteService } from './cliente.service';
import { MessageService } from 'primeng/api';

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
        private readonly clienteService: ClienteService,
        private readonly helperService: HelperService,
        private readonly messageService: MessageService,
    ) { }

    CURRENT_UTC_DATE_ISO_STRING = new Date().toISOString()

    private clienteForm = this.createNewClienteForm()
    // private enderecoForm = this.createNewEnderecoForm()
    private isSubmitedSignal = signal<boolean>(false)

    public getIsSubmitedSignal = computed(this.isSubmitedSignal)

    private createNewClienteForm(clienteEntity?: ClienteEntity) {
        return new FormGroup<ClienteFormType>({
            id: new FormControl(clienteEntity?.id || this.helperService.newUUID(), { nonNullable: true, validators: [Validators.required] }),
            criado_em: new FormControl(clienteEntity?.criado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            atualizado_em: new FormControl(clienteEntity?.atualizado_em || this.CURRENT_UTC_DATE_ISO_STRING, { nonNullable: true, validators: [Validators.required] }),
            cpf: new FormControl(clienteEntity?.cpf || '', { nonNullable: true, validators: [Validators.required] }),
            nome: new FormControl(clienteEntity?.nome || '', { nonNullable: true, validators: [Validators.required] }),
            telefone: new FormControl(clienteEntity?.telefone || '', { nonNullable: true, validators: [Validators.required] }),
            endereco: this.createNewEnderecoForm(clienteEntity?.endereco)
        })
    }

    private createNewEnderecoForm(endereco?: Endereco) {
        return new FormGroup<EnderecoFormType>({
            bairro: new FormControl(endereco?.bairro || '', { nonNullable: true, validators: [Validators.required] }),
            cep: new FormControl(endereco?.cep || '', { nonNullable: true, validators: [Validators.required] }),
            cidade: new FormControl(endereco?.cidade || '', { nonNullable: true, validators: [Validators.required] }),
            estado: new FormControl(endereco?.estado || '', { nonNullable: true, validators: [Validators.required] }),
            numero: new FormControl(endereco?.numero || '', { nonNullable: true, validators: [] }),
            rua: new FormControl(endereco?.rua || '', { nonNullable: true, validators: [Validators.required] }),
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
        return enderecoFormGroup?.get(field) as FormControl<string>
    }

    public checkIfFormControlHasError(formControl: FormControl) {
        // console.log(formControl?.invalid && this.getIsSubmitedSignal())
        return formControl?.invalid && this.getIsSubmitedSignal()
    }

    public setClienteForm(clienteEntity?: ClienteEntity) {
        this.clienteForm = this.createNewClienteForm(clienteEntity)
    }

    public setClienteEndereco(endereco: Endereco) {
        this.getClienteEnderecoFormControl('bairro').setValue(endereco.bairro)
        this.getClienteEnderecoFormControl('cep').setValue(endereco.cep)
        this.getClienteEnderecoFormControl('cidade').setValue(endereco.cidade)
        this.getClienteEnderecoFormControl('estado').setValue(endereco.estado)
        this.getClienteEnderecoFormControl('numero').setValue(endereco.numero)
        this.getClienteEnderecoFormControl('rua').setValue(endereco.rua)
    }

    public submit() {
        this.isSubmitedSignal.set(true)

        if (this.getClienteFormGroup().invalid) {
            this.showToastMessage('error', 'Verifique os campos antes de salvar.')
            return
        }

        console.log('criado_em', this.getClienteFormControl('criado_em').value)
        const clienteFromForm = new ClienteEntity({
            id: this.getClienteFormControl('id').value,
            nome: this.getClienteFormControl('nome').value,
            cpf: this.getClienteFormControl('cpf').value,
            criado_em: this.getClienteFormControl('criado_em').value,
            atualizado_em: new Date().toISOString(),
            telefone: this.getClienteFormControl('telefone').value,
            endereco: {
                bairro: this.getClienteEnderecoFormControl('bairro').value,
                cep: this.getClienteEnderecoFormControl('cep').value,
                cidade: this.getClienteEnderecoFormControl('cidade').value,
                estado: this.getClienteEnderecoFormControl('estado').value,
                numero: this.getClienteEnderecoFormControl('numero').value,
                rua: this.getClienteEnderecoFormControl('rua').value,
            },
        })
        this.clienteService.createOrUpdate(clienteFromForm)
        this.isSubmitedSignal.set(false)
        this.setClienteForm()
    }

    private showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }
}
