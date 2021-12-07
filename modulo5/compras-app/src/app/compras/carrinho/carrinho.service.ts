import { Injectable } from '@angular/core';
import axios from 'axios';
import { IItem } from '../model/iitem.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private URL: string = 'http://localhost:3000/carrinho'
  public listaItem: IItem[] = []

  constructor() {}

  public async getItens(): Promise<void>{    
    try {
      const retorno = await axios.get(this.URL)
      this.listaItem = retorno.data
    } catch (error) { console.error(error) }
  }

  public async getItem(uuid: number): Promise<void>{
    try {
      const retorno = await axios.get(`${this.URL}/${uuid}`)
      return retorno.data
    } catch (error) { console.error(error) }
  }

  public async postItem(newItem: IItem): Promise<void>{
    try {
      await axios.post(this.URL,newItem)
    } catch (error) { console.error(error) }
  }

  public async updateItem(uuid: any, updatedItem: any): Promise<void>{
    try {
      await axios.patch(`${this.URL}/${uuid}`,updatedItem)
    } catch (error) { console.error(error) }
  }

  public async deleteItem(uuid: any): Promise<void>{
    try {
      await axios.delete(`${this.URL}/${uuid}`)     
    } catch (error) { console.error(error) }
  }
}