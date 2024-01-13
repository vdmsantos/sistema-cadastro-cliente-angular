import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';


export interface CepInterface {
    cep: string,
    state: string,
    city: string,
    neighborhood: string,
    street: string,
    service: string,
}

@Injectable({
    providedIn: 'root'
})
export class CepService {
    constructor(
        private httpClient: HttpClient
    ) { }

    BRASILAPI_CEP_API_ROUTE = (cep: string) => `https://brasilapi.com.br/api/cep/v1/${cep}`

    public cepResponseSignal = signal<CepInterface | undefined>(undefined)

    public getCepObservable(cep: string) {
        return this.httpClient.get<CepInterface>(this.BRASILAPI_CEP_API_ROUTE(cep)).pipe(
            map(res => {
                this.cepResponseSignal.set(res)
                return res
            })
        )
    }
}
