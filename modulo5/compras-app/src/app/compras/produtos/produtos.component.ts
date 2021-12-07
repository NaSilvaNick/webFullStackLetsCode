import { IItem } from './../model/iitem.model';
import { CarrinhoService } from './../carrinho/carrinho.service';
import { IProduct } from '../model/iproduct.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public listaProdutos: IProduct[] = []

  constructor(private produtosService: ProdutosService) {}

  async ngOnInit(): Promise<void> {
    await this.produtosService.getProdutos()
    this.listaProdutos = this.produtosService.listaProdutos
  }
}