import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  @Input() public letrasTentadas: string = ''
  @Input() public maximoErros: number = 0
  @Input() public status: string = ''

  constructor() {}
  

  ngOnInit(): void {}

}
