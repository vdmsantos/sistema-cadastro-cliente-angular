export enum UnidadeMedida {
    KG = "kg",
    L = "l",
    UN = "un",
}

export class ProdutoEntity {
    id!: string;
    nome!: string;
    descricao!: string;
    unidade_medida!: UnidadeMedida;
    preco!: number;
    quantidade_estoque!: number;
    image_produto_url!: string;
    atualizado_em!: string;
    criado_em!: string;

    public constructor(init?: Partial<ProdutoEntity>) {
        Object.assign(this, init);
    }
}
