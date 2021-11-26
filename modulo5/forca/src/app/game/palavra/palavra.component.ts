import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent {
  @Input() lacunas: string = ''
  @Input() tamanho: number = 0
}