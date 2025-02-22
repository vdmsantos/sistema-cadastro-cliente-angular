import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-produto-image',
  templateUrl: './produto-image.component.html',
  styleUrls: ['./produto-image.component.scss']
})
export class ProdutoImageComponent {

  @Input({ required: true }) image_url!: string
  @Input() default_image_class!: string
  PrimeIcons = PrimeIcons
}
