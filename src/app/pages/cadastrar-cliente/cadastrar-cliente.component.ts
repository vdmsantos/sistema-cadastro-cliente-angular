import { Component } from '@angular/core';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent {
    constructor(
        public clienteformService: ClienteFormService,
    ) { }

    submitForm() {
        this.clienteformService.submit()
    }
}
