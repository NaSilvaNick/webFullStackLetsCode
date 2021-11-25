import { GameComponent } from './game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalavraComponent } from './palavra/palavra.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GameComponent, PalavraComponent, FormComponent, InfoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GameComponent],
})
export class GameModule { }
