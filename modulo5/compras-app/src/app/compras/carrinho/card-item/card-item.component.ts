import { IItem } from '../../model/iitem.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() item: IItem = {
    id: '',
    image: '',
    product: '',
    description: '',
    price: 0,
    quantity: 0
  }
  
  @Output() remover: EventEmitter<string> = new EventEmitter()
  @Output() alterar: EventEmitter<object> = new EventEmitter()
}
