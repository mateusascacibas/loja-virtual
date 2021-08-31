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
    this.carregarProdutos();
  }

  filtro: string = '';
  pagina: number = 0;
  currentPage: number = 0;

  private carregarProdutos(){
    this.produtos = this.produtoService.listarPaginado(this.pagina, this.filtro);
  }

  pesquisar($event: any){
    this.pagina = 0;
    this.filtro = $event.target.value;
    this.carregarProdutos();  
  }

   adicionarCarrinho(produto: Produto){
     this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }


  paginar($event: any, pagina: number){
    $event.preventDefault();
    this.pagina = pagina;
    this.currentPage = pagina;
    this.carregarProdutos();
  }

  numeroPaginas() {
    return this.produtoService.numeroPaginas(this.filtro);
  }

  obterPaginas() {
    return [...Array(this.numeroPaginas()).keys()];
  }

}
