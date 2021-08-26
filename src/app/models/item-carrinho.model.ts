import { Produto } from 'src/app/models/produto.model';
export class ItemCarrinho{
    constructor(
        public produto: Produto,
        public quantidade: number,
    ){}
}