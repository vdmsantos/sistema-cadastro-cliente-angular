import { Component } from '@angular/core';
import { ClienteFormFields, ClienteService } from '../../services/cliente.service';

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent {
    constructor(
        public clienteService: ClienteService
    ) { }

    clienteFormGroup = this.clienteService.getClienteFormGroup()
    getClienteFormControl = this.clienteService.getClienteFormControl.bind(this.clienteService);
    getClienteEnderecoFormControl = this.clienteService.getClienteEnderecoFormControl.bind(this.clienteService);

    submitForm() {
        this.clienteService.submit()
    }
}
