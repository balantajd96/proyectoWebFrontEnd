import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';


@Component({
  selector: 'app-johnwick',
  templateUrl: './johnwick.component.html',
  styleUrls: ['./johnwick.component.css']
})
export class JohnwickComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Keanu Reeves',
      characterName: 'John Wick',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Halle Berry',
      characterName: 'Sofia',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Ian McShane',
      characterName: 'Winston',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Asia Kate Dillon',
      characterName: 'The Adjudicator',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Laurence Fishburne',
      characterName: 'Bowery King',
      gender: 'Male',
      status: 'Actor'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
