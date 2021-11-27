import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SucessoComponent } from './sucesso/sucesso.component';



@NgModule({
  declarations: [
    ComprasComponent,
    ProdutosComponent,
    CarrinhoComponent,
    SucessoComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ],
  exports: [ComprasComponent]
})
export class ComprasModule {}
