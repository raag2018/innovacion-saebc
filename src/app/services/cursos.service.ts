import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cursoInterface } from '../interfaces/cursos.interface';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
cargando = true;
cursos:  cursoInterface[] = [];
cursoFiltro: cursoInterface[] = [];
  constructor(private http: HttpClient) {
    this.cargarCursos();
   }

  private cargarCursos(){
    return new Promise((resolve, reject) =>{
       this.http.get('https://saebc-96a8a.firebaseio.com/cursos_idx.json')
    .subscribe( (resp: cursoInterface[] ) =>{
           this.cursos = resp;
           this.cargando = false;
           resolve();
    });

    })
    
   
  }

  getCursos(id: string){
    return this.http.get(`https://saebc-96a8a.firebaseio.com/cursos/${id}.json`);
  }

  buscarCurso(termino: string){
    if (this.cursos.length == 0) {
      //cargar cursos
      this.cargarCursos().then( () =>{
        //ejecutar despues de tener los cursos
        //aplicar el filtro
        this.filtrarCursos(termino);
      })
    }else{

      //filtrar cursos
      this.filtrarCursos(termino);
    }
    this.cursoFiltro = this.cursos.filter(cursoItem =>{
      return true;
    });
    }

    private filtrarCursos(termino: string){
      termino = termino.toLocaleLowerCase();
      this.cursoFiltro = [];
      this.cursos.forEach(curn =>{
          const tituloLower = curn.categoria.toLocaleLowerCase();
        if (tituloLower.indexOf(termino) >= 0) {
          this.cursoFiltro.push(curn);
        }
      })
    }

  }

