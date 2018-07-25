import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Foto } from "../foto/foto";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

    private cabecalho = {
        headers: new HttpHeaders(
            { 'Content-Type': 'application/json' }
        )
    }

    private url = 'http://localhost:3000/v1/fotos';

    constructor(private http: HttpClient) {
    }

    listar(): Observable<Foto[]> {
        return this.http.get<Foto[]>(this.url)
    }

    cadastrar(foto: Foto) : Observable<Object> {
        return this.http.post(this.url, foto, this.cabecalho);
    }

}