import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-dialog-header',
    templateUrl: './dialog-header.component.html',
    styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent {

    @Input({ required: true }) dialog_title!: string
    @Input() dialog_icon!: string
    @Input({ required: false }) dialog_hideCloseBtn: boolean = false;

    PrimeIcons = PrimeIcons
}
