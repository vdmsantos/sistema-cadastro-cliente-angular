import { Injectable } from '@angular/core';
import { ClienteEntity } from '../entities/cliente.entity';
import { ProdutoEntity } from '../entities/produto.entity';

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
    }

    private storage: Storage;

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
}
