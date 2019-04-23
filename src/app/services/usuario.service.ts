import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BancoService {

  public logar(usuario): Promise<any> {
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("SELECT email FROM usuarios WHERE email = ? AND senha = ?", [usuario.email, usuario.senha]).then(resultado => {
        return (resultado.rows.length > 0);
      });
    });
  }

  public cadastrarUsuario(usuario){
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)", [usuario.nome,usuario.email,usuario.senha]);
    });
  }

  public buscarTodosUsuarios(): Promise<any> {
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM usuarios", []).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
  }

  public BuscarUsuarioPorId(id): Promise<any> {
    
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM usuarios WHERE id = ?", [id]).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
  }
}
