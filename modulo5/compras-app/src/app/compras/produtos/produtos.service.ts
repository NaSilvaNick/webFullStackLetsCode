import { IProduct } from '../model/iproduct.model';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos'

  public listaProdutos: IProduct[] = []

  constructor() {}

  public async getProdutos(): Promise<void>{

    const retorno = await axios.get(this.URL)
    this.listaProdutos = retorno.data
  }
}
