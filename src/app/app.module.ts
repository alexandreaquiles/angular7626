import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { roteamento } from './app.routes';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoService } from './servicos/foto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    FotoModule, PainelModule, roteamento
  ],
  providers: [ FotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
