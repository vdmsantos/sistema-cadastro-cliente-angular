import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { APP_ROUTE_PATHS } from '../../app-routing.module';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    menu_items = [
        {
            title: 'Inicio',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Inicio',
            url: '/' + APP_ROUTE_PATHS.INICIO,
            icon: PrimeIcons.HOME,
        },
        {
            title: 'Clientes',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Listar clientes',
            url: '/' + APP_ROUTE_PATHS.LISTAR_CLIENTES,
            icon: PrimeIcons.USERS,
        },
        {
            title: 'Cadastrar cliente',
            url: '/' + APP_ROUTE_PATHS.CADASTRAR_CLIENTE,
            icon: PrimeIcons.USER_PLUS,
        },
        {
            title: 'Produtos',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Listar produtos',
            url: '/' + APP_ROUTE_PATHS.LISTAR_PRODUTOS,
            icon: PrimeIcons.TAGS,
        },
        {
            title: 'Cadastrar produto',
            url: '/' + APP_ROUTE_PATHS.CADASTRAR_PRODUTO,
            icon: PrimeIcons.TAG,
        },
        {
            title: 'Pedidos',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Listar pedidos',
            url: '/' + APP_ROUTE_PATHS.LISTAR_PEDIDOS,
            icon: PrimeIcons.SHOPPING_CART,
        },
        {
            title: 'Cadastrar pedido',
            url: '/' + APP_ROUTE_PATHS.CADASTRAR_PEDIDO,
            icon: PrimeIcons.CART_PLUS,
        },
    ];
}
