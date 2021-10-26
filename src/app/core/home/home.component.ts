import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideojuegoService } from 'src/app/modules/videojuegos/videojuego_service';
import { Videojuego } from './videojuego';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videojuegoList: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService) { }
  

  ngOnInit(): void {
    this.findAllWhere();
  }

  
  findAllWhere(): void {
    this.videojuegoService.findAllWhere()
    .subscribe(videojuegoList => this.videojuegoList = videojuegoList);
  }

}
