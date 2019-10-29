import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cursoInterface } from '../interfaces/cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
cargando = true;
cursos:  cursoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarCursos();
   }

  private cargarCursos(){
    this.http.get('https://saebc-96a8a.firebaseio.com/cursos_idx.json')
    .subscribe( (resp: cursoInterface[] ) =>{
   
       this.cursos = resp;
       
           this.cargando = false;
 
    });
  }

  getCursos(id: string){
    return this.http.get(`https://saebc-96a8a.firebaseio.com/cursos/${id}.json`);
  }
}
