import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AssociadosService } from '../services/associados.service';
import { Associados } from '../models/associados';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.page.html',
  styleUrls: ['./lista-funcionarios.page.scss'],
})
export class ListaFuncionariosPage implements OnInit {

  foto:string = "../../assets/img/icone.jpg";
  associados:Associados;
  constructor(private rotas:Router,private menu:MenuController,private associadoService:AssociadosService) {}

  ionViewWillEnter() {
    this.menu.enable(true);
    this.associadoService.buscarTodosAssociados().then(resultado => {
      this.associados = resultado;
    }).catch((erro) => alert(erro));
  }

  ngOnInit() { }

}
