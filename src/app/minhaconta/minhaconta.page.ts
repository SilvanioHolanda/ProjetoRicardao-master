import { Component, OnInit } from '@angular/core';
import { AutenticarLoginGuard } from '../autenticar-login.guard';
import { UsuarioService } from '../services/usuario.service';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.page.html',
  styleUrls: ['./minhaconta.page.scss'],
})
export class MinhacontaPage implements OnInit {

  usuario:Usuarios;
  constructor(private usuarioService:UsuarioService) { }

  ionViewWillEnter(){
    let id = AutenticarLoginGuard.id;
    this.usuarioService.BuscarUsuarioPorId(id).then(resultado => {
      resultado.forEach(element => {
        this.usuario = element;
      });
    });
  }

  ngOnInit() {
  }

}