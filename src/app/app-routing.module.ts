import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AutenticarLoginGuard } from './autenticar-login.guard';

const routes: Routes = [
  { path: "", redirectTo:'lista-funcionarios', pathMatch:'full'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'lista-funcionarios', loadChildren: './catalogo-funcionarios/lista-funcionarios.module#CatalogoFuncionariosPageModule' },
  { path: 'cadastro-funcionario', canActivate:[AutenticarLoginGuard], loadChildren: './cadastro-funcionario/cadastro-funcionario.module#CadastroFuncionarioPageModule' },
  { path: 'listar-associados', canActivate:[AutenticarLoginGuard],loadChildren: './listar-associados/listar-associados.module#ListarAssociadosPageModule' },
  { path: 'cadastrar-usuario', loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'atualizar-associado/:id', canActivate:[AutenticarLoginGuard],loadChildren: './atualizar-deletar-associado/atualizar-deletar-associado.module#AtualizarDeletarAssociadoPageModule' },
  { path: 'informacao/:id', loadChildren: './mais-informacao/mais-informacao.module#MaisInformacaoPageModule' },
  { path: 'minhaconta', canActivate:[AutenticarLoginGuard], loadChildren: './minhaconta/minhaconta.module#MinhacontaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
