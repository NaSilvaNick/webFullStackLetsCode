import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private palavra: string[] = []
  private lacunas: string[] = []

  constructor() {}


  criaLacunas(palavra: string): string{
    
    this.palavra = palavra.split('')
    const lacunas: string[] = []
    
    for(let i = 0; i < palavra.length; i++){
      lacunas.push('__')
    }

    this.lacunas = lacunas
    return lacunas.join(' ')
  }

  marcaLetra(letra: string): string{    
    this.palavra.forEach((letraPalavra,index) =>{
      if(letraPalavra == letra){
        this.lacunas[index] = letra
      }
    })
    return this.lacunas.join(' ')
  }
}