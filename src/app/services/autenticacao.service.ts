import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../model/usuario';

const USUARIOS:Usuario[] = [
  {"email": "admin", "senha":"admin"}
]

@Injectable()
export class AutenticacaoService {

  usuarios: Usuario[] = USUARIOS;
  authState = new BehaviorSubject(false);

  constructor(private router : Router) {
    this.setLogado();
   }

   loginProvider(usuario: Usuario):Usuario{
    var usu = null;
    this.usuarios.forEach(x =>{

      if(usuario.email == x.email && usuario.senha == x.senha){
          usu = x;
      }

    })
    return usu;
  }

   login(usuario:Usuario){
     var obj = {
       email : usuario.email,
       senha : usuario.senha
     }
     var usu = this.loginProvider(usuario);
     if(usu != null){
        localStorage.setItem('USER_INFO', JSON.stringify(usuario));
        this.router.navigate(['logado']);
        this.authState.next(true);
     }
   }

   setLogado(){
    try{
      let USER_INFO = localStorage.getItem('USER_INFO');

      if(USER_INFO){
        return true
      }

        return false;
    }catch(error){
      console.log("Erro: ", error.console.error());
      return false;
    }

   }

   estaAutenticado(){
     return this.authState.value;
   }

   logout(){
     localStorage.removeItem('USER_INFO');
     this.router.navigate(['login']);
     this.authState.next(false);
   }
}
