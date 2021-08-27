import { ItemCarrinho } from './../models/item-carrinho.model';
import { Injectable } from '@angular/core';
import { Carrinho } from '../models/carrinho.model';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: Carrinho = new Carrinho([]);
  constructor() { 
    if(localStorage['carrinho']){
      this.carrinho.itens = JSON.parse(localStorage['carrinho']);
    }
  }

  adicionar(produto: Produto){
    const index = this.carrinho.itens.findIndex(item => item.produto.id === produto.id);
    if(index > -1){
      this.carrinho.itens[index].quantidade++;

    }else{
      const item = new ItemCarrinho(produto, 1);
      this.carrinho.itens.push(item);
    }
    console.log("CARRINHO: ", this.carrinho);
    localStorage['carrinho'] = JSON.stringify(this.carrinho.itens);
  }

  remover(id: number){
    const index = this.carrinho.itens.findIndex(item => item.produto.id === id);
    if(index === -1){
      return;
    } 
    if (this.carrinho.itens[index].quantidade === 1){
      this.carrinho.itens = this.carrinho.itens.filter( item => item.produto.id !== id);
    } else{
      this.carrinho.itens[index].quantidade--;
    }
  }

  get total(){
    return this.carrinho.itens.map((item: ItemCarrinho) => item.produto.preco * item.quantidade)
      .reduce((acc: number, preco: number) => acc + preco);
  }

  get quantidade(){
    if(this.carrinho.itens.length === 0){
      return 0;
    }
    return this.carrinho.itens.map((item: ItemCarrinho) => item.quantidade)
    .reduce((acc: number, quantidade: number) => acc + quantidade);
  }

  get itens(){
    return this.carrinho.itens;
  }
}
