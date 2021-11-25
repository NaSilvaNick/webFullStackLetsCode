import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() aoTentar = new EventEmitter()
  input: string = ''

  constructor(){}

  ngOnInit(): void {}

  tentar(): void {
    this.aoTentar.emit(this.input)
    this.clearInput()
  }

  clearInput(): void {
    this.input = ''
  }
}
