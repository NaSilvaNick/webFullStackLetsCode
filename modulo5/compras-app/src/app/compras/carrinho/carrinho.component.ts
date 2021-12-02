import { IItem } from './../model/iitem.model';
import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public listaItens: IItem[] = []
  public total: number = 0

  constructor(private carrinhoService: CarrinhoService) { }

  async ngOnInit(): Promise<void> {
    await this.Renderizalista()
  }
  
  async Renderizalista(){
    await this.carrinhoService.getItens()
    this.listaItens = this.carrinhoService.listaItem
    this.atualizaTotal()
  }

  async removerItem(id: any){
    await this.carrinhoService.deleteItem(id)
    await this.Renderizalista()
  }

  async ajustaQuantidade(input: any, id: any){
    await this.carrinhoService.updateItem(id, { quantity: Number(input.target.value) })
    await this.Renderizalista()
  }

  atualizaTotal(){
    this.total = this.listaItens.reduce((acc,current) => {
      return acc + (current.price * current.quantity)
    },0)
  }
}