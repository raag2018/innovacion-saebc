import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cursoInterface } from '../interfaces/cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
cargando = true;
  constructor(private http: HttpClient) {
    this.cargarCursos();
   }

  private cargarCursos(){
    this.http.get('https://saebc-96a8a.firebaseio.com/cursos_idx.json')
    .subscribe( (resp: cursoInterface[] ) =>{
      console.log(resp);
      this.cargando = false;

    });
  }
}
