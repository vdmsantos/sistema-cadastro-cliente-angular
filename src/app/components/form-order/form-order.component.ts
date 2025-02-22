import { Component, Input } from '@angular/core';
import { ClienteFormService } from '../../services/cliente-form.service';
import { CepService } from '../../services/cep.service';
import { take } from 'rxjs';
import { PrimeIcons } from 'primeng/api';
import { Endereco } from '../../types/endereco.interface';
import { ProdutoEntity } from 'src/app/entities/produto.entity';
import { ClienteEntity } from 'src/app/entities/cliente.entity';

@Component({
    selector: 'app-form-order',
    templateUrl: './form-order.component.html',
    styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
    constructor(
        private clienteFormService: ClienteFormService,
        private cepService: CepService
    ) {}
    selectedCustomer: ClienteEntity | null = null;
    selectedProduct: ProdutoEntity | null = null;
    @Input({ required: true }) product_list!: ProdutoEntity[] | any[];
    @Input({ required: true }) customer_list!: ClienteEntity[] | any[];

    clienteFormGroup = this.clienteFormService.getClienteFormGroup();
    getClienteFormControl = this.clienteFormService.getClienteFormControl.bind(
        this.clienteFormService
    );
    getClienteEnderecoFormControl =
        this.clienteFormService.getClienteEnderecoFormControl.bind(
            this.clienteFormService
        );
    cepResponseSignal = this.cepService.cepResponseSignal;
    PrimeIcons = PrimeIcons;
    loadingCep = false;
    cepErrorMessage = '';

    submitForm() {
        this.clienteFormService.submit();
    }

    getCepAndSetClienteEnderecoForm(cep: string) {
        this.loadingCep = true;
        this.cepService
            .getCepObservable(cep)
            .pipe(take(1))
            .subscribe({
                next: (res) => {
                    const newEndereco = {
                        bairro: res.neighborhood,
                        cep: res.cep,
                        cidade: res.city,
                        estado: res.state,
                        numero: this.getClienteEnderecoFormControl('numero')
                            .value,
                        rua: res.street,
                    } as Endereco;
                    this.clienteFormService.setClienteEndereco(newEndereco);
                    this.cepErrorMessage = '';
                    this.loadingCep = false;
                },
                error: (err) => {
                    console.log(`Erro ao consultar cep '${cep}':`, err);
                    this.cepErrorMessage = 'CEP inválido.';
                    this.loadingCep = false;
                },
            });
    }
}
