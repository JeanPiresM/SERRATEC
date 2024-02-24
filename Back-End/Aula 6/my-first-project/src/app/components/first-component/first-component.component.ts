import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = "Jean"
  estado = "Rio de Janeiro"
  hobbies = ["Jogar", "Estudar","Correr"]

  car = {
    name:"Fiat 147", 
    factory:"Fiat",
    year:"1947"
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }
}
