import { IItem } from './../model/iitem.model';
import { CarrinhoService } from './../carrinho/carrinho.service';
import { IProduct } from '../model/iproduct.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { v4 as Uuid } from 'uuid';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public listaProdutos: IProduct[] = []

  constructor(
    private produtosService: ProdutosService,
    private CarrinhoService: CarrinhoService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.produtosService.getProdutos()
    this.listaProdutos = this.produtosService.listaProdutos
  }
  
  async adicionaCarrinho(produto: IProduct){
    try {
      await this.CarrinhoService.postItem(<IItem>{
        id: Uuid(),
        image: produto.image,
        product: produto.product,
        description: produto.description,
        price: produto.price,
        quantity: 1
      })
    } catch (error) { console.error(error) }
  }
}
