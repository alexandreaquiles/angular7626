import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "./foto";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(listaFotos: Foto[], digitado: string) {
        return listaFotos.filter(f => f.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }

}