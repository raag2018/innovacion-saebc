import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { EscuelasComponent } from './pages/escuelas/escuelas.component';


@NgModule ({ 

  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CursosComponent,
    AboutComponent,
    ProductoComponent,
    ItemComponent,
    SearchComponent,
    EscuelasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

