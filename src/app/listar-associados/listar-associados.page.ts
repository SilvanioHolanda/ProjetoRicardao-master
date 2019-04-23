import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { AssociadosService } from '../services/associados.service';
import { Associados } from '../models/associados';

@Component({
  selector: 'app-listar-associados',
  templateUrl: './listar-associados.page.html',
  styleUrls: ['./listar-associados.page.scss'],
})
export class ListarAssociadosPage implements OnInit {

  foto:string = "../../assets/img/icone.jpg";
  associados:Associados;
  constructor(private msgAlerta:AlertController ,private rotas:Router,private menu:MenuController,private associadoService:AssociadosService) {}

  ionViewWillEnter() {
    this.menu.enable(true);
    this.associadoService.buscarTodosAssociados().then(resultado => {
      this.associados = resultado;
    }).catch((erro) => alert("O Erro foi "+erro));
  }

  ngOnInit() {
  }

  editar(id){
    this.rotas.navigate(['/atualizar-associado',id]);
  }

  async deletarAssociado(id) {
    const alert = await this.msgAlerta.create({
      header: 'Atenção!',
      message: 'Deseja Deletar este Associado?',
      buttons: [{text:'Cancelar'},{text:'Deletar', handler: () =>{
        this.excluir(id);
      } }]
    });
    await alert.present();
  }

  excluir(id){
    try {
      this.associadoService.deletarAssociado(id);
      return this.rotas.navigateByUrl('/');
    } catch (error) {
      alert("Erro é "+ error);
    }
  }
}
