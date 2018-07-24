import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from './foto/foto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Caelum Pic';

  fotos: Foto[] = []

  constructor (http: HttpClient) {
    http.get<Foto[]>('http://localhost:3000/v1/fotos')
    .subscribe( 
      dados => this.fotos = dados,
      erro => console.error(erro)
    );
  }
}
