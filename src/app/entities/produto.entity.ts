export class ProdutoEntity {
    id!: string
    nome!: string
    descricao!: string
    preco!: string
    criado_em!: string
    atualizado_em!: string
    image_profile_url!: string

    public constructor(init?: Partial<ProdutoEntity>) {
        Object.assign(this, init);
    }
}
