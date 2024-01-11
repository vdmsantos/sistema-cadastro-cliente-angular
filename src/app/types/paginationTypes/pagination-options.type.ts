import { ClienteEntity } from "../../entities/cliente.entity"
import { LimitEnum } from "./limit.enum"
import { OrderByColumnEnum } from "./order-by-column.enum"
import { OrderEnum } from "./order.enum"

export type PaginationOptionsType = {
    page?: number
    limit?: LimitEnum
    order?: OrderEnum
    orderByColumn?: OrderByColumnEnum
    searchQuery?: string
    searchBy?: 'nome' | 'cpf'
}

export type PaginationMeta = {
    totalItems: number
    totalPages: number
    currentPage: number
    itemsPerPage: number
    itemCount: number
}
