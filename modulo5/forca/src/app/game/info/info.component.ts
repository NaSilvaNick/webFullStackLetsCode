import { Status } from './../status.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{
  @Input() public letrasTentadas: string = ''
  @Input() public erros: number = 0
  @Input() public status: Status = Status.INICIO
  tipoStatus: typeof Status = Status
}