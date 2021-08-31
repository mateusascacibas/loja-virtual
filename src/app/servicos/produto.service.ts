import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  produtos: Produto[] = [
    new Produto(2, "Tênis Nike Air Force", 500, ["AirForce.jpg"], ["O brilho perdura no Nike Air Force 1 '07, o tênis original que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar."]),
    new Produto(3, "Tênis Nike Air Max", 450, ['AirMax.jpg'], ["Com o mesmo design ondulado do original inspirado em trens-bala japoneses, o Nike Air Max permite que você aumente a velocidade do seu estilo. Com a revolucionária unidade Air de comprimento total da Nike, que abala as estruturas do mundo da corrida e adiciona cores novas e detalhes nítidos, ele permite que você corra com conforto de primeira classe."]),
    new Produto(4, "Tênis Nike Nike Blazer Mid '77", 599, ['Blazer.jpg'], ["O Nike Blazer Mid '77 Infinite dá continuidade ao legado do clássico ícone do basquete que se tornou popular nas ruas. Os detalhes em borracha durável na ponta, no calcanhar e na lateral permitem que você vá para onde quiser, dia após dia, enquanto o logotipo Swoosh distorcido e costurado confere um toque moderno."]),
    new Produto(5, "Tênis Adidas Rivalry", 250, ['adidasRivalry.jpg'], ["O estilo que dominou as quadras na metade dos anos 80 está de volta com um novo visual para as ruas. Este tênis exibe um cabedal de couro monocromático que oferece maciez e conforto."]),
    new Produto(6, "Tênis Adidas Superstar", 300, ['adidasSuperstarr.jpg'], ["Criado originalmente para as quadras de basquete nos anos 70. Celebrado pelas lendas do hip hop da década de 80. O tênis adidas Superstar é um ícone do estilo de vida urbano. "]),
    new Produto(1, "Tênis Nike Air Jordan", 659, ["Jordan.jpg"],  ["Defende sua ousadia com um estilo de jogo rápido e agressivo e seus números que o colocam entre os melhores da liga. O seu novo Jordan One Take II incorpora seu vigor e sua velocidade. As cores, texturas e linhas de design lembram a personalidade de Russ dentro e fora da quadra."]),
  ];
    
  constructor() { }

  numeroCompra: string = '';
  public qtdProdutos = 0;
  NomeCompra = "";
  PrecoCompra = 0;
  QuantidadeCompra = 1;
  idProduto: number = 0;
  produto: any;
  prodCompra: any;
  public qtd: number | undefined;
  private readonly total_elem_pag = 5;

  listarPaginado(pagina = 0, filtro = ""): Produto[] {
    let produto = this.produtos;
    //Paginação
    produto = this.filtrar(produto, filtro);
    const indice = pagina * this.total_elem_pag;
    produto = produto.slice(indice,indice + this.total_elem_pag);
    return produto;
 }

 private filtrar(produtos: Produto[], filtro: string): Produto[] {
  if (filtro === '') {
    return produtos;
  }
  return produtos.filter((produtos: Produto) =>
  produtos.nome.toLowerCase().includes(filtro.toLowerCase()));
}

 numeroPaginas(filtro: string){
  const tarefas = this.filtrar(this.listarTodosProdutos(), filtro);
  return Math.ceil(tarefas.length / this.total_elem_pag);
}
listarTodosProdutos(): Produto[]{
  return this.produtos;
}


  listarId(id: number): Produto| undefined{
    return this.produtos.find(produto => produto.id == id);
    
  }
}
