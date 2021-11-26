import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() public aoTentar = new EventEmitter()

  public tentar(input: HTMLInputElement): void {
    this.aoTentar.emit(input.value.toLowerCase())
    this.limparInput(input)
  }

  private limparInput(input: HTMLInputElement): void {
    input.value = ''
  }
}
