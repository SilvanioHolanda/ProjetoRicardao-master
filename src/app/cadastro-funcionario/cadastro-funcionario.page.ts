import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssociadosService } from '../services/associados.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.page.html',
  styleUrls: ['./cadastro-funcionario.page.scss'],
})
export class CadastroFuncionarioPage implements OnInit {
  
  foto:string = "../../assets/img/foto.png";
  formulario:FormGroup;
  constructor(private camera:Camera,private rotas:Router, private menu:MenuController, private formbuilder:FormBuilder, private msgAlerta:AlertController,private associadosService:AssociadosService) {}

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      nome:[null,[Validators.required]],
      sexo:[null,[Validators.required]],
      funcao:[null,[Validators.required]],
      horario:[null,[Validators.required]],
      descricao:[null,[Validators.required]]
    });
  }

  cadastrarAssociado(){
    let associados = this.formulario.value;
    associados.imagem = this.foto;
    this.associadosService.cadastrarAssociado(associados).then(() =>{
      this.rotas.navigate(['/listar-associados']);
    }).catch((erro) => alert("Erro é "+erro));
  }

  async SalvarAssociado() {
    const alert = await this.msgAlerta.create({
      header: 'Atenção!',
      message: 'Deseja Cadastrar este Associado?',
      buttons: [{text:'Cancelar'},{text:'Cadastrar', handler: () =>{
        this.cadastrarAssociado();
      } }]
    });
    await alert.present();
  }

  tiraFoto(){
    const options: CameraOptions = {
      cameraDirection: this.camera.Direction.FRONT,
      allowEdit: true,
      quality: 100,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.foto = base64Image;
    }, (err) => {
      alert("Erro");
    });
  }
}
