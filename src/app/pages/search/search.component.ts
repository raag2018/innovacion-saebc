import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              public CursosService: CursosService) {

    this.route.params
    .subscribe(params =>{
      console.log(params['termino']);
      this.CursosService.buscarCurso(params['termino']);
    });
   }

  ngOnInit() {
  }

}
