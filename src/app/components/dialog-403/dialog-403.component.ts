import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PrimeIcons } from "primeng/api";
import { APP_ROUTE_PATHS } from "../../app-routing.module";
import { AuthService } from "../../services/http/auth.service";

@Component({
    selector: 'app-dialog-403',
    templateUrl: './dialog-403.component.html',
    styleUrls: ['./dialog-403.component.scss']
})
export class Dialog403Component {
    PrimeIcons = PrimeIcons;
    APP_ROUTE_PATHS = APP_ROUTE_PATHS;

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    navToLogin() {
        // this.router.navigate([`/${APP_ROUTE_PATHS.LOGIN}`]);
        this.authService.logout();
    }
}
