import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroFuncionarioPage } from './cadastro-funcionario.page';
import { ServicesModule } from '../services/services.module';
import { Camera } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: CadastroFuncionarioPage
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
  declarations: [CadastroFuncionarioPage],
  providers:[Camera]
})
export class CadastroFuncionarioPageModule {}
