import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { CursoDes } from '../../interfaces/curso-des.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  Curso: CursoDes;
  id: string;
  constructor(private route: ActivatedRoute,
              public cursoSerivice: CursosService) { }

  
  ngOnInit() {
    this.route.params.subscribe(
      parametros =>{
        console.log(parametros['id']);
        this.cursoSerivice.getCursos(parametros['id'])
        .subscribe( (Curso: CursoDes) => {
          this.id = parametros['id'];
          this.Curso = Curso;
        
          //descargarpeliculasdvdriplatino.com
        })
      }
    );
  }

}
