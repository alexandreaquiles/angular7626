import { Component } from '@angular/core';

import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: Foto = new Foto();

  constructor(private servico: FotoService) {
  }

  salvar(evento: Event) {
    evento.preventDefault();

    console.log(this.foto);

  
    this.servico
    .cadastrar(this.foto)
    .subscribe(
      () => {
        console.log(`Foto  ${this.foto.titulo}  salva com sucesso.`);
        this.foto = new Foto();
      },
      erro => console.error(erro)
    );


  }

}
