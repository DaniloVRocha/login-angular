import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public autenticacao:AutenticacaoService, private router: Router) {

   }
   canActivate(): boolean {
     if(!this.autenticacao.estaAutenticado()){
       this.router.navigate(['login']);
       return false;
     }
       return true;
   }
}
