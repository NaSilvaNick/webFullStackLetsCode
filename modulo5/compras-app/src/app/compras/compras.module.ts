import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ItemComponent } from './carrinho/item/item.component';
import { DarkenOnHoverDirective } from './shared/directives/darkenonhover.directive';
import { UnderlineOnHoverDirective } from './shared/directives/underlineonhover.directive';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

@NgModule({
  declarations: [
    ComprasComponent,
    ProdutosComponent,
    CarrinhoComponent,
    SucessoComponent,
    HomeComponent,
    ProdutoComponent,
    ItemComponent,
    DarkenOnHoverDirective,
    UnderlineOnHoverDirective,
    ProdutoDetalheComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ],
  exports: [ComprasComponent]
})
export class ComprasModule {}