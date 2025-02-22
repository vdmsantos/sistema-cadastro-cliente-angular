import { MessageService } from 'primeng/api';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(
        private messageService: MessageService
    ) { }

    success(message: string) {
        this.messageService.add({
            severity: 'success',
            summary: message,
        });
    }

    error(message: string) {
        this.messageService.add({
            severity: 'error',
            summary: message,
        });
    }

    warning(message: string) {
        this.messageService.add({
            severity: 'warn',
            summary: message,
        });
    }

    info(message: string) {
        this.messageService.add({
            severity: 'info',
            summary: message,
        });
    }
}
