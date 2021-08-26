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
    const id = +this.route.snapshot.params['id'];
    this.produto = this.produtoService.listarId(id);
  }
  adicionarCarrinho(){
    if(!this.produto){
      return;
    }
    this.carrinhoService.adicionar(this.produto);
    this.router.navigate(['/carrinho']);
  }
}
