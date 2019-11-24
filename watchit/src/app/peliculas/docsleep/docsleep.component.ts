import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';


@Component({
  selector: 'app-docsleep',
  templateUrl: './docsleep.component.html',
  styleUrls: ['./docsleep.component.css']
})
export class DocsleepComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Ewan McGregor',
      characterName: 'Dan Torrance',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Rebecca Ferguson',
      characterName: 'Rose The Hat',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Kyliegh Curran',
      characterName: 'Abra Stone',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Cliff Curtis',
      characterName: 'Billy Freeman',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Emily Alyn Lind',
      characterName: 'Snakebite Andi',
      gender: 'Female',
      status: 'Actress'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
