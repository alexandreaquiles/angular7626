import { Component, Input } from "@angular/core";
import { Foto } from './foto';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html' 
})
export class FotoComponent {

   @Input() foto: Foto;

}