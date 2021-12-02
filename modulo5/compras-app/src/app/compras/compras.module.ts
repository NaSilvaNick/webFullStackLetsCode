import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { HomeComponent } from './home/home.component';
import { CardProdutoComponent } from './produtos/card-produto/card-produto.component';
import { CardItemComponent } from './carrinho/card-item/card-item.component';

@NgModule({
  declarations: [
    ComprasComponent,
    ProdutosComponent,
    CarrinhoComponent,
    SucessoComponent,
    HomeComponent,
    CardProdutoComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ],
  exports: [ComprasComponent]
})
export class ComprasModule {}
