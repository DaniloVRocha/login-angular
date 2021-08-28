import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) {

  }

  getNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6a4d7a75a3964f42916b20f038b57556');
  }
}
