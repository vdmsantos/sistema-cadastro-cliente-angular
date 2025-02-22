import { LocalStorageService } from './../local-storage.service';
import { Injectable, signal } from "@angular/core";
import { map } from "rxjs";
import { HttpService } from "./http.service";
import { Router } from '@angular/router';
import { APP_ROUTE_PATHS } from '../../app-routing.module';
import { ToastService } from '../toast.service';
import { ENVIRONMENT } from '../../environment';

export type TPermission = 'teacher' | 'student';

export interface ILoginPayload {
    email: string,
    password: string
}

export interface ILoginResponse {
    user: {
        _id: string,
        name: string,
        email: string
    },
    accessToken: string
}

export interface ILoggedUser {
    _id: string,
    name: string,
    email: string,
    accessToken: string,
    permission: TPermission,
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private endpoint = ENVIRONMENT.BASE_ENDPOINT;

    constructor(
        private httpService: HttpService,
        private localStorageService: LocalStorageService,
        private router: Router,
        private toastService: ToastService,
    ) { }

    public getLoggedUser() {
        return this.localStorageService.getLoggedUser();
    }

    private parseLoggedUser(data: ILoginResponse, permission: TPermission) {
        return {
            accessToken: data.accessToken,
            email: data.user.email,
            _id: data.user._id,
            name: data.user.name,
            permission: permission
        } as const;
    }

    public login(payload: ILoginPayload) {
        // fazer login e salvar token no localstorage
        return this.httpService.post<ILoginResponse>(`${this.endpoint}/teacher/auth`, payload).pipe(
            map(data => {
                const loggedUser = this.parseLoggedUser(data, 'teacher');
                this.localStorageService.setLoggedUser(loggedUser);
                // this.router.navigate([`/${APP_ROUTE_PATHS.PROFESSOR}/${APP_ROUTE_PATHS.DASHBOARD}`]);
                return loggedUser;
            })
        )
    }

    // public loginMonitor(payload: ILoginPayload) {
    //     return this.httpService.post<ILoginResponse>(`${this.endpoint}/monitor/auth`, payload).pipe(
    //         map(data => {
    //             const loggedUser = this.parseLoggedUser(data, 'monitor');
    //             this.localStorageService.setLoggedUser(loggedUser);
    //             // this.router.navigate([`/${APP_ROUTE_PATHS.MONITOR}/${APP_ROUTE_PATHS.INFORMACOES_ADICIONAIS}`]);
    //             return loggedUser;
    //         })
    //     )
    // }

    public logout() {
        this.localStorageService.clear();
        this.toastService.success(`Até mais!`);
        this.router.navigate([`/${APP_ROUTE_PATHS.LOGIN}`]);
    }

    // private parse(data: any): MonitorModel {
    //     const parsed = new MonitorModel();
    //     parsed.setByDb(data);
    //     this.loggedUserSig.set(parsed);
    //     return parsed;
    // }
}
