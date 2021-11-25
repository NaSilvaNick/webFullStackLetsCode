import { GameService } from './../game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent implements OnInit {
  
  @Input() lacunas: string = ''
  @Input() palavraLength: number = 0

  constructor() { }

  ngOnInit(): void {}
}