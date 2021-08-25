export class Produto{
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public fotos: string[],
        public descricao: string[]
    ){}
}   