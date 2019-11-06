import { Component, OnInit } from '@angular/core';
import { EscuelasService } from '../../services/escuelas.service';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.component.html',
  styleUrls: ['./escuelas.component.css']
})
export class EscuelasComponent implements OnInit {

  constructor(public _school: EscuelasService) { }

  ngOnInit() {
  }

}
