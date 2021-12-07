import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CarrinhoService } from './../../carrinho/carrinho.service';
import { IProduct } from '../../model/iproduct.model';
import { IItem } from '../../model/iitem.model';
import { v4 as Uuid } from 'uuid';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() produto: IProduct = {
    id: 0,
    image: '',
    product: '',
    description: '',
    price: 0
  }

  constructor(
    private carrinhoService: CarrinhoService,
    private route: Router
  ){}

  async adicionaCarrinho(produto: IProduct){
    try {
      await this.carrinhoService.postItem(<IItem>{
        id: Uuid(),
        image: produto.image,
        product: produto.product,
        description: produto.description,
        price: produto.price,
        quantity: 1
      })
    } catch (error) { console.error(error) }
  }

  verDetalhe(){
    this.route.navigate(['produtos/produto',this.produto.id])
  }
}