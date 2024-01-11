import { Endereco } from "../types/endereco.interface"

export class ClienteEntity {
    id!: string
    nome!: string
    cpf!: string
    telefone!: string
    endereco!: Endereco
    atualizado_em!: string
    criado_em!: string

    public constructor(init?: Partial<ClienteEntity>) {
        Object.assign(this, init);
    }
}
