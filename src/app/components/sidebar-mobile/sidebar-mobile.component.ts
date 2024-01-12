import { Component } from '@angular/core';
import { APP_ROUTE_PATHS } from '../../app-routing.module';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-sidebar-mobile',
    templateUrl: './sidebar-mobile.component.html',
    styleUrls: ['./sidebar-mobile.component.scss']
})
export class SidebarMobileComponent {

    menu_items = [
        // {
        //     title: 'Consulta',
        //     url: 'SEPARADOR',
        //     icon: 'SEPARADOR',
        // },
        {
            title: 'Listar',
            url: '/' + APP_ROUTE_PATHS.LISTAR_CLIENTES,
            icon: PrimeIcons.ALIGN_JUSTIFY,
        },
        {
            title: '',
            url: 'LOGO',
            icon: 'LOGO',
        },
        // {
        //     title: 'Cadastro',
        //     url: 'SEPARADOR',
        //     icon: 'SEPARADOR',
        // },
        {
            title: 'Cadastrar',
            url: '/' + APP_ROUTE_PATHS.CADASTRAR_CLIENTE,
            icon: PrimeIcons.PLUS,
        },
    ]

}
