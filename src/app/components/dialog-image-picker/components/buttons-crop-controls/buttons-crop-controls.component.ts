import { Component, EventEmitter, Output } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-buttons-crop-controls',
    templateUrl: './buttons-crop-controls.component.html',
    styleUrls: ['./buttons-crop-controls.component.scss']
})
export class ButtonsCropControlsComponent {

    @Output() rotateImageRight: EventEmitter<void> = new EventEmitter();
    @Output() flipHorizontal: EventEmitter<void> = new EventEmitter();
    @Output() flipVertical: EventEmitter<void> = new EventEmitter();
    @Output() zoomIn: EventEmitter<void> = new EventEmitter();
    @Output() zoomOut: EventEmitter<void> = new EventEmitter();
    @Output() removeImage: EventEmitter<void> = new EventEmitter();

    PrimeIcons = PrimeIcons

    emitRotateImageRight() {
        this.rotateImageRight.emit()
    }

    emitFlipHorizontal() {
        this.flipHorizontal.emit()
    }

    emitFlipVertical() {
        this.flipVertical.emit()
    }

    emitZoomIn() {
        this.zoomIn.emit()
    }

    emitZoomOut() {
        this.zoomOut.emit()
    }

    emitRemoveImage() {
        this.removeImage.emit()
    }
}
