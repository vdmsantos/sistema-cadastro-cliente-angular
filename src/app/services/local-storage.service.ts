import { Injectable, signal } from '@angular/core';
import { ClienteEntity } from '../entities/cliente.entity';
import { ProdutoEntity } from '../entities/produto.entity';
import { ILoggedUser } from './http/auth.service';

export const LOCAL_STORAGE_KEYS = {
    CLIENTES: 'clientes_list_localstorage',
    PRODUTOS: 'produtos_list_localstorage'
}

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
        this.loggedUserSignal.set(this.getLoggedUser());
    }

    private storage: Storage;
    public loggedUserSignal = signal<ILoggedUser | null>(null);

    public getClienteList(): ClienteEntity[] {
        if (!this.storage) return []
        const item = this.storage.getItem(LOCAL_STORAGE_KEYS.CLIENTES)
        if (!item) return []
        return JSON.parse(item) as ClienteEntity[];
    }

    public setClienteStorage(value: ClienteEntity[]) {
        if (!this.storage) return false
        this.storage.setItem(LOCAL_STORAGE_KEYS.CLIENTES, JSON.stringify(value));
        return true
    }

    public clearClienteList(): boolean {
        if (!this.storage) return false;
        this.storage.clear();
        return true;
    }

    public getProdutoList(): ProdutoEntity[] {
        if (!this.storage) return []
        const item = this.storage.getItem(LOCAL_STORAGE_KEYS.PRODUTOS)
        if (!item) return []
        return JSON.parse(item) as ProdutoEntity[];
    }

    public setProdutoStorage(value: ProdutoEntity[]) {
        if (!this.storage) return false
        this.storage.setItem(LOCAL_STORAGE_KEYS.PRODUTOS, JSON.stringify(value));
        return true
    }

    public clearProdutoList(): boolean {
        if (!this.storage) return false;
        this.storage.clear();
        return true;
    }

    // AUTH

    public getLoggedUser(): ILoggedUser | null {
        if (!this.storage) return null;
        const item = this.storage.getItem('user');
        if (!item) return null;
        const loggedUser = JSON.parse(item) as ILoggedUser;
        return loggedUser;
    }

    public setLoggedUser(value: ILoggedUser) {
        if (!this.storage) return false;
        this.storage.setItem('user', JSON.stringify(value));
        this.loggedUserSignal.set(this.getLoggedUser());
        return this.getLoggedUser();
    }

    public clear(): boolean {
        if (!this.storage) return false;
        this.storage.clear();
        this.loggedUserSignal.set(null);
        return true;
    }
}
