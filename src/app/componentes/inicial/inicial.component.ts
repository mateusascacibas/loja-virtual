import { ProdutoService } from 'src/app/servicos/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  produtos: Produto[] = [];

  constructor( private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
  }

}
