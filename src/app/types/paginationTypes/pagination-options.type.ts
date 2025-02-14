import { LimitEnum } from "./limit.enum"
import { OrderByColumnEnum, OrderProductByColumnEnum } from "./order-by-column.enum"
import { OrderEnum } from "./order.enum"
import { SearchByEnum, SearchProductByEnum } from "./search-by.enum"
import { StartByOrContainEnum } from "./start-by-or-contain.enum"

export type PaginationOptionsType = {
    page?: number
    limit?: LimitEnum
    order?: OrderEnum
    orderByColumn?: OrderByColumnEnum
    searchQuery?: string
    searchBy?: SearchByEnum
    startByOrContain?: StartByOrContainEnum
}

export type ProductPaginationOptionsType = {
    page?: number
    limit?: LimitEnum
    order?: OrderEnum
    orderByColumn?: OrderProductByColumnEnum
    searchQuery?: string
    searchBy?: SearchProductByEnum
    startByOrContain?: StartByOrContainEnum
}

export type PaginationMeta = {
    totalItems: number
    totalPages: number
    currentPage: number
    itemsPerPage: number
    itemCount: number
}
