import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { MessageService, PrimeIcons } from 'primeng/api';
import { ProdutoFormService } from '../../services/produto-form.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-produto-dialog-image-picker',
  templateUrl: './produto-dialog-image-picker.component.html',
  styleUrls: ['./produto-dialog-image-picker.component.scss']
})
export class ProdutoDialogImagePickerComponent implements OnInit {
    constructor(
        private produtoFormService: ProdutoFormService,
        private messageService: MessageService,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) { }

    PrimeIcons = PrimeIcons

    imgChangeEvent: any = ''
    originalImage = this.produtoFormService.getProdutoFormControl('image_produto_url').value
    cropImgPreview: any = ''
    imageBase64 = ''
    imageTooBigErrorMessage = ''
    maxImageSize = 1_048_576 * 3 // 3MB

    transform: ImageTransform = {
        translateUnit: 'px'
    };
    canvasRotation = 0;
    translateH = 0;
    translateV = 0;
    scale = 1;
    loading = true

    COMPONENT_TEXTS = {
        INPUT_TOOLTIP: 'Selecionar imagem do dispositivo.'
    }

    hasImage() {
        if (this.imgChangeEvent || this.originalImage || this.cropImgPreview) return true
        else return false
    }

    isLoadingAndHasImage() {
        if (this.loading && (this.originalImage || this.cropImgPreview)) return true
        else return false
    }

    isNotLoadingAndHasNoImage() {
        if (!this.cropImgPreview && (!this.loading || !this.originalImage)) return true
        else return false
    }

    hasNoImage() {
        if (!this.imgChangeEvent && !this.originalImage && !this.cropImgPreview) return true
        else return false
    }

    removeImage() {
        this.imgChangeEvent = null
        this.cropImgPreview = ''
        this.originalImage = ''
        this.imageBase64 = ''
    }

    rotateImageRight() {
        this.loading = true
        setTimeout(() => {
            this.canvasRotation++;
            this.flipAfterRotate();
        });
    }

    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }

    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
        this.translateH = 0;
        this.translateV = 0;
    }

    onFileChanged(event: any) {
        const imageSelected = event.target.files[0]
        if (!imageSelected) return
        if (imageSelected.size > this.maxImageSize) {
            this.imageTooBigErrorMessage = 'Imagem muito grande. Máximo 3 MB.'
            this.showToastMessage('error', 'Imagem muito grande. Máximo 3 MB.')
            return
        }
        this.imageTooBigErrorMessage = ''
        this.imgChangeEvent = event
    }

    async cropImg(event: ImageCroppedEvent) {
        this.cropImgPreview = event.objectUrl
        const imageBlob = event.blob
        const imageBase64 = await this.convertFromBlobToBase64(imageBlob!)
        console.log('imgBlob', imageBlob)
        console.log('imageBase64', imageBase64)
        this.imageBase64 = imageBase64
    }

    private async convertFromBlobToBase64(imageBlob: Blob) {
        // Source: https://stackoverflow.com/a/77311335/19709090
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        return new Promise<string>(resolve => {
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
        });
    }

    imgFailed() {
        console.log('Erro ao carregar imagem no cropper.')
    }

    cropperReady() {
        this.loading = false
    }

    setImageToProdutoEntity() {
        this.setImageUrlInProdutoForm(this.imageBase64)
    }

    private setImageUrlInProdutoForm(imageUrl: string) {
        this.produtoFormService.getProdutoFormControl('image_produto_url').setValue(imageUrl)
    }

    private showToastMessage(severity: 'success' | 'error', message: string) {
        this.messageService.add({
            severity: severity,
            summary: message,
        });
    }

    ngOnInit() {
        this.closeDialogOnBrowserBackNavigation()
    }

    private closeDialogOnBrowserBackNavigation() {
        // https://stackoverflow.com/a/58077214/19709090
        if (isPlatformBrowser(this.platformId)) {
            history.pushState({}, document.getElementsByTagName('title')[0].innerHTML, window.location.href);
        }
    }

}
