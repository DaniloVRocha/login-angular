import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  artigos: any[] = [];
  user = localStorage.getItem('USER_INFO');

  constructor(private service: AutenticacaoService,
    private news: NewsapiService) {

   }

  ngOnInit(): void {
    this.listarNews();
  }

  logout(){
    this.service.logout(); // vai na service e busca o metodo "login", passando como parametro o usuario.
  }

  listarNews(){
    this.news.getNews().subscribe(res =>{
      this.artigos = res['articles'];
    })
  }

}
