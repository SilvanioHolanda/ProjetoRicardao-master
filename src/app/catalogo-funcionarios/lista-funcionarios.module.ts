import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaFuncionariosPage } from './lista-funcionarios.page';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: ListaFuncionariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaFuncionariosPage]
})
export class CatalogoFuncionariosPageModule {}
