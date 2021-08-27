import { CarrinhoService } from './../../servicos/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto | undefined;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private router: Router, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.produto = this.produtoService.listarId(+routeParams.id);
    });
  }
  adicionarCarrinho(){
    if(!this.produto){
      return;
    }
    this.carrinhoService.adicionar(this.produto);
    this.router.navigate(['/carrinho']);
  }
}
