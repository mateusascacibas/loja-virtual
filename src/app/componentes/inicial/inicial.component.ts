import { CarrinhoService } from './../../servicos/carrinho.service';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  produtos: Produto[] = [];

  constructor( private produtoService: ProdutoService, private router: Router, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
  }
   adicionarCarrinho(produto: Produto){
     this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }

}
