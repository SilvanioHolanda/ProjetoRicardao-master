import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private sqlite: SQLite, platform: Platform) { 
    platform.ready().then(() => this.createBanco());
  }

  protected conexao() {
    return this.sqlite.create({
      name: 'chama_ricardao.db',
      location: 'default'
    });
  }

  private createBanco() {
    this.conexao().then((db:SQLiteObject) => {
      //Criando Tabela Usuários
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        nome TEXT,\
        email TEXT,\
        senha TEXT\
        )", []);

        //Criando Tabela de Produtos
      db.executeSql("CREATE TABLE IF NOT EXISTS associados(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        nome TEXT,\
        sexo TEXT,\
        funcao TEXT,\
        horario TEXT,\
        descricao TEXT,\
        imagem TEXT\
        )", []);
    });
  }
}