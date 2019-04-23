import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.page.html',
  styleUrls: ['./lista-funcionarios.page.scss'],
})
export class ListaFuncionariosPage implements OnInit {

  nome1;
  nome2;
  nome3;

  constructor(private rotas:Router) { }

  ngOnInit() {
    this.nome1 = "Carlos Arcanjo";
    this.nome2 = "Sebastião Da Silva";
    this.nome3 = "Jurandi Peito de Pombo";
  }

  cadastrar(){
    this.rotas.navigateByUrl("cadastro-funcionario");
  }

}
