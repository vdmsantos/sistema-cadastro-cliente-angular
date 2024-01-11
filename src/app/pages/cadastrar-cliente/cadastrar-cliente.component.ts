import { Component } from '@angular/core';
import { ClienteFormFields, ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent {
    constructor(
        public clienteService: ClienteFormService
    ) { }

    clienteFormGroup = this.clienteService.getClienteFormGroup()
    getClienteFormControl = this.clienteService.getClienteFormControl.bind(this.clienteService);
    getClienteEnderecoFormControl = this.clienteService.getClienteEnderecoFormControl.bind(this.clienteService);

    submitForm() {
        this.clienteService.submit()
    }
}
