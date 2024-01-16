import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-profile-image',
    templateUrl: './profile-image.component.html',
    styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent {

    @Input({ required: true }) image_url!: string
    @Input() default_image_class!: string
    PrimeIcons = PrimeIcons
}
