import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { LocalStorageService } from "../local-storage.service";
import { MatDialog } from "@angular/material/dialog";
import { Dialog403Component } from "../../components/dialog-403/dialog-403.component";

@Injectable({
    providedIn: "root",
})
export class HttpService {
    openDialogId = "";
    constructor(
        private httpClient: HttpClient,
        private localStorageService: LocalStorageService,
        private matDialog: MatDialog
    ) { }

    public get<T>(
        endpoint: string,
        params?: any,
        catchErrorMessage?: string
    ): Observable<any> {
        const token = this.localStorageService.getLoggedUser()?.accessToken;
        const headers = { Authorization: `Bearer ${token}` };
        return this.httpClient.get<T>(endpoint, { headers, ...params }).pipe(
            tap({
                error: (err) => {
                    if (err.status == 403) {
                        this.handleAuthForbiddenError();
                    }
                    console.error(
                        catchErrorMessage || `Erro capturado em GET "${endpoint}"`,
                        err
                    );
                    return err;
                },
            })
        );
    }

    public post<T>(
        endpoint: string,
        payload?: any,
        catchErrorMessage?: string
    ): Observable<T> {
        const token = this.localStorageService.getLoggedUser()?.accessToken;
        const headers = { Authorization: `Bearer ${token}` };
        return this.httpClient.post<T>(endpoint, payload, { headers }).pipe(
            tap({
                error: (err) => {
                    if (err.status == 403) {
                        this.handleAuthForbiddenError();
                    }
                    console.error(
                        catchErrorMessage || `Erro capturado em POST "${endpoint}"`,
                        err
                    );
                },
            })
        );
    }

    public put<T>(
        endpoint: string,
        payload?: any,
        catchErrorMessage?: string
    ): Observable<T | undefined> {
        const token = this.localStorageService.getLoggedUser()?.accessToken;
        const headers = { Authorization: `Bearer ${token}` };
        return this.httpClient.put<T>(endpoint, payload, { headers }).pipe(
            tap({
                error: (err) => {
                    if (err.status == 403) {
                        this.handleAuthForbiddenError();
                    }
                    console.error(
                        catchErrorMessage || `Erro capturado em PUT "${endpoint}"`,
                        err
                    );
                },
            })
        );
    }

    public patch<T>(
        endpoint: string,
        payload?: any,
        catchErrorMessage?: string
    ): Observable<T | undefined> {
        const token = this.localStorageService.getLoggedUser()?.accessToken;
        const headers = { Authorization: `Bearer ${token}` };
        return this.httpClient.patch<T>(endpoint, payload, { headers }).pipe(
            tap({
                error: (err) => {
                    if (err.status == 403) {
                        this.handleAuthForbiddenError();
                    }
                    console.error(
                        catchErrorMessage || `Erro capturado em PATCH "${endpoint}"`,
                        err
                    );
                },
            })
        );
    }

    public delete<T>(
        endpoint: string,
        catchErrorMessage?: string
    ): Observable<T | undefined> {
        const token = this.localStorageService.getLoggedUser()?.accessToken;
        const headers = { Authorization: `Bearer ${token}` };
        return this.httpClient.delete<T>(endpoint, { headers }).pipe(
            tap({
                error: (err) => {
                    if (err.status == 403) {
                        this.handleAuthForbiddenError();
                    }
                    console.error(
                        catchErrorMessage || `Erro capturado em DELETE "${endpoint}"`,
                        err
                    );
                },
            })
        );
    }

    private handleAuthForbiddenError() {
        this.localStorageService.clear();
        const dialogIsOpen = this.matDialog.openDialogs.find(
            (item) => item.id === this.openDialogId
        );
        if (!dialogIsOpen) {
            const dialogRef = this.matDialog.open(Dialog403Component, {
                disableClose: true,
            });
            this.openDialogId = dialogRef.id;
            dialogRef.afterClosed().subscribe((_) => (this.openDialogId = ""));
        }
    }
}
