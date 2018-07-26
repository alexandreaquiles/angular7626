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

  mensagem: string = ''

  constructor(private servico: FotoService) {
    servico
      .listar()
      .subscribe(
        dados => this.listaFotos = dados,
        erro => console.error(erro)
      );
  }

  remover(foto: Foto) {
    console.log(`Removendo ${foto.titulo}`);
    this.servico
      .deletar(foto)
      .subscribe(
        () => {
          this.mensagem = `Foto ${foto.titulo} apagada com sucesso.`;
          this.listaFotos = this.listaFotos.filter( f => f._id !== foto._id);

          setTimeout(() => this.mensagem = '', 2000);

        }, 
        erro => console.error(erro)
      );
  }

}
