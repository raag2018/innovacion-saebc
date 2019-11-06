import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { escuelasInterface } from '../interfaces/escuelas.interface';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {
escuelaServ: escuelasInterface[] = [];
  constructor(private http: HttpClient) { 
    this.cargarEscuelas();

  }

  private cargarEscuelas(){
    return new Promise((resolve, reject) =>{
      this.http.get('https://saebc-96a8a.firebaseio.com/escuelas.json')
      .subscribe((resp: escuelasInterface[])=>{
        this.escuelaServ = resp;
        console.log(resp);
        resolve();
      })
    })
  }
}
