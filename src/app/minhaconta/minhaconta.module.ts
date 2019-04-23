import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhacontaPage } from './minhaconta.page';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: MinhacontaPage
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
  declarations: [MinhacontaPage]
})
export class MinhacontaPageModule {}
