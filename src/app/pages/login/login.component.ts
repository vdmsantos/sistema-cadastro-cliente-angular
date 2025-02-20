import { AuthService, ILoginPayload } from './../../services/http/auth.service';
import { Component } from '@angular/core';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    loginForm: ILoginPayload = {
        email: '',
        password: '',
    }

    constructor(
        public authService: AuthService,
    ) { }

    login() {
        this.authService.login(this.loginForm);
    }
}
