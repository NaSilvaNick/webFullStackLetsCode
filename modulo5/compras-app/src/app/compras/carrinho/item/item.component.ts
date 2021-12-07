import { IItem } from '../../model/iitem.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: IItem = {
    id: '',
    image: '',
    product: '',
    description: '',
    price: 0,
    quantity: 0
  }
  
  @Output() renderizar: EventEmitter<object> = new EventEmitter()

  constructor(private carrinhoService: CarrinhoService){}

  async removerItem(id: any){
    await this.carrinhoService.deleteItem(id)
    this.renderizar.emit()
  }

  async ajustaQuantidade(input: any, id: any){
    await this.carrinhoService.updateItem(id, { quantity: Number(input.target.value) })
    this.renderizar.emit()
  }

}
