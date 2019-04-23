import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AssociadosService extends BancoService{

  public cadastrarAssociado(associado){
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO associados (nome, sexo, funcao, horario, descricao, imagem) VALUES (?,?,?,?,?,?)", 
      [associado.nome, associado.sexo, associado.funcao, associado.horario, associado.descricao, associado.imagem]);
    });
    
  }

  public buscarTodosAssociados(): Promise<any> {
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM associados", []).then(resultado => {
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

  public BuacarAssociadoPorId(id): Promise<any> {
    return this.conexao().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM associados WHERE id = ?", [id]).then(resultado => {
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

  public editarAssociacao(obj: Object, id:any) {

    let key = Object.keys(obj);
    let values = Object.values(obj);
    let campos:string[] = [];
    key.forEach((k, i) => {
      campos.push(k + ' = ?');
    }) 
    values.push(id);
    
    this.conexao().then((db:SQLiteObject) => {
      db.executeSql("UPDATE associados" + " SET " + campos.join(', ') + " WHERE id = ?", values);
      return true;
    });
  }

  public deletarAssociado(id:any) {
    this.conexao().then((db:SQLiteObject) => {
      db.executeSql("DELETE FROM associados WHERE id = ?", [id]);
    });
  }
}
