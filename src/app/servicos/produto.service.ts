import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [
    new Produto(2, "Air Force", 500, ["AirForce.jpg"], ["O brilho perdura no Nike Air Force 1 '07, o tênis original que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar."]),
    new Produto(3, "Air Max", 450, ['AirMax.jpg'], ["Com o mesmo design ondulado do original inspirado em trens-bala japoneses, o Nike Air Max permite que você aumente a velocidade do seu estilo. Com a revolucionária unidade Air de comprimento total da Nike, que abala as estruturas do mundo da corrida e adiciona cores novas e detalhes nítidos, ele permite que você corra com conforto de primeira classe."]),
    new Produto(4, "Nike Blazer Mid '77", 599, ['Blazer.jpg'], ["O Nike Blazer Mid '77 Infinite dá continuidade ao legado do clássico ícone do basquete que se tornou popular nas ruas. Os detalhes em borracha durável na ponta, no calcanhar e na lateral permitem que você vá para onde quiser, dia após dia, enquanto o logotipo Swoosh distorcido e costurado confere um toque moderno."]),
    new Produto(5, "Adidas Rivalry", 250, ['adidasRivalry.jpg'], ["Tenis Adidas Rivalry Low."]),
    new Produto(6, "Adidas Superstar", 300, ['adidasSuperstarr.jpg'], ["Adidas Superstar feminino."]),
    new Produto(1, "Air Jordan", 659, ["Jordan.jpg"],  ["Defende sua ousadia com um estilo de jogo rápido e agressivo e seus números que o colocam entre os melhores da liga. O seu novo Jordan One Take II incorpora seu vigor e sua velocidade. As cores, texturas e linhas de design lembram a personalidade de Russ dentro e fora da quadra."]),
  ];
    
  constructor() { }

  listarTodos(): Produto[]{
    return this.produtos;
  }

  listarId(id: number): Produto| undefined{
    return this.produtos.find(produto => produto.id === id);
  }
}
