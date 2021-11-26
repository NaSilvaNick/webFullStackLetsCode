import { Status } from './status.model';
import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private palavraSecreta: string = ''
  private palavras: string[] = ['Angular','Javascript','Typescript','Nickolas','Calopsita']
  
  public lacunas: string = ''
  public letrasTentadas: string = ''
  public erros: number = 6
  public status: Status = Status.INICIO
  public palavraTamanho: number = 0
  
  constructor(private service: GameService) {}
  
  public resetGame(): void {
    
    this.status = Status.INICIANDO
  
    setTimeout((): void => {
      
      this.service.resetGame()
      this.palavraSecreta = this.service.escolhePalavraSecreta(this.palavras)
      this.lacunas = this.service.criaLacunas(this.palavraSecreta)
      this.palavraTamanho = this.palavraSecreta.length
      this.status = Status.INICIO
      this.letrasTentadas = ''
      this.erros = 6
    }, 800)
  }
  
  ngOnInit(): void {
    
    this.resetGame()
  }

  tentarLetra(letra: string): void {

    if(!this.erros || !letra) return

    if(this.letrasTentadas.includes(letra)){
      this.status = Status.REPETIDA
      return
    } 
    
    if (this.palavraSecreta.includes(letra)){
      
      this.status = Status.ACERTOU
      this.lacunas = this.service.marcaLetra(letra)
      this.letrasTentadas = this.service.guardaLetra(letra)
      
    } 

    if (!this.palavraSecreta.includes(letra)){
    
      this.status = Status.ERROU
      this.erros = this.service.marcaErro(this.erros)
      this.letrasTentadas = this.service.guardaLetra(letra)
    }
    
    this.service.verificaJogo(
      
      (status: Status) => {
      
        this.status = status
      },
      
      (erros: number) => {
      
        this.erros = erros
      }
    )
  }
}