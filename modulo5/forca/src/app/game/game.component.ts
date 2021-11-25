import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  palavraSecreta: string = ''
  palavras: string[] = ['angular','javascript','typescript','nickolas','calopsita']
  lacunas: string = ''
  letrasTentadas: string = ''
  maximoErros: number = 6
  status: string = 'Vamos Jogar!!!'
  palavraLength: number = 0

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.resetGame()
  }

  tentarLetra(inputLetra: string): void {

    const letra = inputLetra.toLowerCase().trim()

    if(this.maximoErros == 0 || this.maximoErros == 7) return

    if(this.letrasTentadas.includes(letra)){
      this.status = 'Voce já tentou essa letra'
      return
    } 

    if (this.palavraSecreta.includes(letra)){
      
      this.status = 'Você acertou!!!'
      this.lacunas = this.service.marcaLetra(letra)
      this.guardaLetra(letra)
    } else {

      this.guardaLetra(letra)
      this.status = 'você errou.'
      this.maximoErros--
    }
    
    this.verificaJogo()
  }
  
  verificaJogo(): void {

    if(this.maximoErros == 0){
      this.status = 'você perdeu, que pena...'
      return
    }

    if(this.palavraSecreta == this.lacunas.split(' ').join('')){
      this.status = 'PARABÉNS VOCÊ GANHOU!!!'
      this.maximoErros = 7
      return
    }
  }

  resetGame(): void {
    
    this.status = 'Iniciando Jogo...'

    setTimeout(()=>{
      this.letrasTentadas = ''
      this.maximoErros = 6
      this.status = 'Vamos Jogar!!!'
      this.escolhePalavraSecreta()
      this.lacunas = this.service.criaLacunas(this.palavraSecreta)
      this.palavraLength = this.palavraSecreta.length
    }, 600)

  }

  private guardaLetra(letra: string): void {
    this.letrasTentadas = [...this.letrasTentadas, letra].join(' ')
  }

  private escolhePalavraSecreta(): void {
    this.palavraSecreta = this.palavras[Math.floor(Math.random() * this.palavras.length)].toLowerCase().trim()
  }
}