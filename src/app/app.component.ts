import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { CursosService } from './services/cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Distema de Acceso a E-lerning de bajo costo';
  constructor (public _infoPagina: InfoPaginaService,
              public _infoCursos: CursosService){

  }
}
