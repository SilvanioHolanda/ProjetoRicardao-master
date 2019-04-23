import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AssociadosService } from '../services/associados.service';
import { Associados } from '../models/associados';

@Component({
  selector: 'app-mais-informacao',
  templateUrl: './mais-informacao.page.html',
  styleUrls: ['./mais-informacao.page.scss'],
})
export class MaisInformacaoPage implements OnInit {

  associado:Associados;
  constructor(private menu:MenuController, private rotas:Router, private pegarId:ActivatedRoute, private associadosService:AssociadosService) {}

  ionViewWillEnter() {
    this.menu.enable(true);
    let idAssociado = this.pegarId.snapshot.params['id'];
    this.associadosService.BuacarAssociadoPorId(idAssociado).then(resultado =>{
      this.associado = resultado;
    }).catch((erro) => alert('O é '+erro));
  }

  ngOnInit() { }

}