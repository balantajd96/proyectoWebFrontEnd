import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';

@Component({
  selector: 'app-johnwick1',
  templateUrl: './johnwick1.component.html',
  styleUrls: ['./johnwick1.component.css']
})
export class Johnwick1Component implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Keanu Reeves',
      characterName: 'John Wick',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Michael Nyqvist',
      characterName: 'Viggo Tarasov',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Alfie Allen',
      characterName: 'Iosef Tarasov',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'William Dafoe',
      characterName: 'Marcus',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Adrianne Palicki',
      characterName: 'Ms. Perkins',
      gender: 'Female',
      status: 'Actress'
    }];
  constructor() { }

  ngOnInit() {
  }

}
