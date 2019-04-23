import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticarLoginGuard } from '../autenticar-login.guard';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {
  
  formulario:FormGroup;
  constructor(private menu:MenuController,private usuario:UsuarioService, private rotas:Router,private menuBarra:MenuController,private formbuilder:FormBuilder) {}

  ionViewWillEnter() {
    this.menu.enable(false); //Desabilita
  }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      nome:[null,[Validators.required]],
      email:[null,[Validators.required, Validators.email]],
      senha:[null,[Validators.required, Validators.minLength(6)]]
   });
  }

  cadastrar(){
    this.usuario.cadastrarUsuario(this.formulario.value).then(() => {

      this.usuario.buscarTodosUsuarios().then(resultados =>{
        resultados.forEach(usuario => {
          if(usuario.email == this.formulario.get('email').value && usuario.senha == this.formulario.get('senha').value){
            AutenticarLoginGuard.id = usuario.id;
          }
        });
      });
      
      this.rotas.navigate(['/lista-funcionarios']);
      AutenticarLoginGuard.acessar = true;
    }).catch(() => {
      alert('Erro ao Cadastrar Usuário');
    });
  }

}
