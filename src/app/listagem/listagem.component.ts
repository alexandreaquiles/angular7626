import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelum Pic';

  listaFotos: Foto[] = [];

  constructor(private servico: FotoService) {
    servico
      .listar()
      .subscribe(
        dados => this.listaFotos = dados,
        erro => console.error(erro)
      );
  }

}
