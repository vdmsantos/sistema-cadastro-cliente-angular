import { Component } from '@angular/core';
import { ClienteFormService } from '../../services/cliente-form.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-form-customer',
    templateUrl: './form-customer.component.html',
    styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent {

    constructor(
        public clienteService: ClienteFormService,
        private messageService: MessageService,
    ) { }

    clienteFormGroup = this.clienteService.getClienteFormGroup()
    getClienteFormControl = this.clienteService.getClienteFormControl.bind(this.clienteService);
    getClienteEnderecoFormControl = this.clienteService.getClienteEnderecoFormControl.bind(this.clienteService);

    submitForm() {
        const submitResponse = this.clienteService.submit()
        if (this.clienteService.getClienteFormGroup().invalid) {
            this.showToastMessage('error', 'Verifique os campos antes de salvar.')
        } else this.showToastMessage('success', 'Cliente salvo com sucesso.')
    }

    showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }
}
