import { Component } from '@angular/core';
import { APP_ROUTE_PATHS } from '../../../../app-routing.module';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-cards-actions',
    templateUrl: './cards-actions.component.html',
    styleUrls: ['./cards-actions.component.scss']
})
export class CardsActionsComponent {
    PrimeIcons = PrimeIcons
    APP_ROUTE_PATHS = APP_ROUTE_PATHS

}
