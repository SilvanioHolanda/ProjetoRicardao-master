import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { UsuarioService } from './usuario.service';
import { AssociadosService } from './associados.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SQLite, UsuarioService, AssociadosService]
})
export class ServicesModule { }
