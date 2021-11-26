import { Status } from './status.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private palavra: string[] = []
  private lacunas: string[] = []
  private letrasTentadas: string[] = []
  private maximoErros: number = 6

  constructor() {}

  public resetGame(): void {
    this.palavra = []
    this.lacunas = []
    this.letrasTentadas = []
    this.maximoErros = 6
  }

  public criaLacunas(palavra: string): string{   
    for(let i = 0; i < palavra.length; i++){
      this.lacunas.push('__')
    }
    return this.lacunas.join(' ')
  }

  marcaLetra(letra: string): string{    
    this.palavra.forEach((letraPalavra,index) =>{
      if(letraPalavra == letra){
        this.lacunas[index] = letra
      }
    })
    return this.lacunas.join(' ')
  }

  public escolhePalavraSecreta(palavras: string[]): string {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)].trim().toLowerCase()
    
    this.palavra = palavra.split('')
    
    return palavra
  }

  public guardaLetra(letra: string): string {
    this.letrasTentadas.push(letra)
    return this.letrasTentadas.join(' ').toUpperCase()
  }

  public marcaErro(erros: number): number {
    this.maximoErros = --erros
    return erros
  }

  verificaJogo(statusFN: any, erroFN: any): void {

    if(!this.maximoErros){
      statusFN(Status.PERDEU)
      erroFN(0)
    }
    
    if(this.palavra.join('') == this.lacunas.join('')){
      statusFN(Status.GANHOU)
      erroFN(0)
    }
  }
}