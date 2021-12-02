import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SucessoComponent } from './sucesso/sucesso.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home' , component: HomeComponent},
    { path: 'produtos' , component: ProdutosComponent},
    { path: 'carrinho' , component: CarrinhoComponent},
    { path: 'sucesso' , component: SucessoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ComprasRoutingModule {}