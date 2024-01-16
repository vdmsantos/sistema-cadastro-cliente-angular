import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-image-preview',
    templateUrl: './image-preview.component.html',
    styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {

    @Input({ required: true }) isLoadingAndHasImage!: boolean
    @Input({ required: true }) cropImgPreview!: string | any
    @Input({ required: true }) isNotLoadingAndHasNoImage!: boolean

    PrimeIcons = PrimeIcons
}
