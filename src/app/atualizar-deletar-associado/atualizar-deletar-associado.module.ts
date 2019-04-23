import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtualizarDeletarAssociadoPage } from './atualizar-deletar-associado.page';
import { ServicesModule } from '../services/services.module';
import { Camera } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: AtualizarDeletarAssociadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ServicesModule
  ],
  declarations: [AtualizarDeletarAssociadoPage],
  providers:[Camera]
})
export class AtualizarDeletarAssociadoPageModule {}
