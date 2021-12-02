import { IProduct } from '../../model/iproduct.model';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  @Input() produto: IProduct = {
    id: 0,
    image: '',
    product: '',
    description: '',
    price: 0
  }
  @Output() adicionar: EventEmitter<IProduct> = new EventEmitter()
}