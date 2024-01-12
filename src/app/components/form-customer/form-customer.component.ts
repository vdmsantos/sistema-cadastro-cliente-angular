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
        private clienteFormService: ClienteFormService,
    ) { }

    clienteFormGroup = this.clienteFormService.getClienteFormGroup()
    getClienteFormControl = this.clienteFormService.getClienteFormControl.bind(this.clienteFormService);
    getClienteEnderecoFormControl = this.clienteFormService.getClienteEnderecoFormControl.bind(this.clienteFormService);

    submitForm() {
        this.clienteFormService.submit()
    }
}
