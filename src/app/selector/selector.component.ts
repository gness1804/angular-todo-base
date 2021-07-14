import { Component, OnInit } from '@angular/core';

interface Superhero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }

  superheros: Superhero[] = [
    { id: 1, name: 'Black Widow'},
    { id: 2, name: 'Captain America'},
    { id: 3, name: 'Iron Man'},
    { id: 4, name: 'Incredible Hulk'},
    { id: 5, name: 'Spider Man'},
  ];

  selected: Superhero = this.superheros[0];

  ngOnInit(): void {
  }

}