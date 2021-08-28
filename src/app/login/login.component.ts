import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  usuario:Usuario= new Usuario();

  constructor(private service: AutenticacaoService) {

   }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }

  ngOnDestroy(){
    document.body.className="bg-img";
  }

  loginUsuario(){
    this.service.login(this.usuario);
  }
}
