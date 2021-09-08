import { CarrinhoService } from './../../servicos/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    
  });

  constructor(private fb: FormBuilder, private carrinhoService: CarrinhoService, private router: Router) { }
  
  get itens(){
    return this.carrinhoService.itens;
  }

  get total(){
    return this.carrinhoService.total;
  }
  ngOnInit(): void {
  }

  pagar($event: any) {
    $event.preventDefault();

    this.carrinhoService.liberar();
    this.router.navigate(['/']);
    alert("Compra finalizada com sucesso.");
  }

}
