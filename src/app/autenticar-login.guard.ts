import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarLoginGuard implements CanActivate {

public static acessar = false;
public static id = "";

constructor(private rotas:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!AutenticarLoginGuard.acessar){
        this.rotas.navigateByUrl("/login");
      }
    return AutenticarLoginGuard.acessar;
  }
}
