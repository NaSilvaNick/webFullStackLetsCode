import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  private id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtosService: ProdutosService  
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    const objeto = await this.produtosService.getProduto(this.id)
    console.log(objeto)
  }
}
