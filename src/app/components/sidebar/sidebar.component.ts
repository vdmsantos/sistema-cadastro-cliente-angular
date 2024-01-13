import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { APP_ROUTE_PATHS } from '../../app-routing.module';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
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
            title: 'Cadastro',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Cadastrar cliente',
            url: '/' + APP_ROUTE_PATHS.CADASTRAR_CLIENTE,
            icon: PrimeIcons.PLUS,
        },
        {
            title: 'Consulta',
            url: 'SEPARADOR',
            icon: 'SEPARADOR',
        },
        {
            title: 'Listar clientes',
            url: '/' + APP_ROUTE_PATHS.LISTAR_CLIENTES,
            icon: PrimeIcons.ALIGN_JUSTIFY,
        },
    ]
}
