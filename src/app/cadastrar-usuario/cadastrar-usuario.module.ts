import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarUsuarioPage } from './cadastrar-usuario.page';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: CadastrarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ServicesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarUsuarioPage],
})
export class CadastrarUsuarioPageModule {}
