import { Produto } from './produto.model';

describe('Produto', () => {
  it('should create an instance', () => {
    expect(new Produto(1,'',1,[],[])).toBeTruthy();
  });
});
