import { Component } from '@angular/core';

import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: Foto = new Foto();

  formCadastro: FormGroup;

  constructor(private servico: FotoService,
    private rota: ActivatedRoute,
    private roteador: Router,
    formBuilder: FormBuilder) {

    this.formCadastro = formBuilder.group({
      titulo: [ '', Validators.required ],
      url: '',
      descricao: ''
    });


  


    const idFoto = this.rota.snapshot.params.idFoto;
    if (idFoto) {
      this.servico
        .obterFoto(idFoto)
        .subscribe(
          fotoApi => this.foto = fotoApi,
          erro => console.error(erro)
        );
    }
  }

  salvar() {

    console.log(this.foto);

    if (this.foto._id) {

      this.servico
        .alterar(this.foto)
        .subscribe(
          () => {
            console.log(`Foto  ${this.foto.titulo} alterada com sucesso.`);

            setTimeout( () => this.roteador.navigate(['']), 3000);

           
          },
          erro => console.error(erro)
        );

    } else {

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

}
