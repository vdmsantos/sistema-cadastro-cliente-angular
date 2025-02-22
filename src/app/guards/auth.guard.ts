import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Dialog403Component } from "../components/dialog-403/dialog-403.component";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private localStorageService: LocalStorageService,
        private matDialog: MatDialog,
    ) { }

    private openDialog403() {
        this.matDialog.open(Dialog403Component, { disableClose: true });
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
        if (this.localStorageService.getLoggedUser()?.permission === 'teacher') {
            return true;
        } else {
            console.error('Auth Guard: Necessário efetuar login.');
            this.openDialog403();
            return false;
        };
    }
};
