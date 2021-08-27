import { CarrinhoService } from './servicos/carrinho.service';
import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private carrinhoService: CarrinhoService){
  }


  get itens(){
    return this.carrinhoService.itens;
  }

  get total(){
    return this.carrinhoService.total;
  }

  get quantidade(){
    return this.carrinhoService.quantidade;
  }
}

 
