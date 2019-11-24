import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Joaquin Phoenix',
      characterName: 'Arthur Fleck',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Robert De Niro',
      characterName: 'Murray Franklin',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Zazie Beetz',
      characterName: 'Sophie Dumond',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Frances Conroy',
      characterName: 'Penny Flecker',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Glenn Fleshler',
      characterName: 'Randall',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Leigh Gill',
      characterName: 'Gary',
      gender: 'Male',
      status: 'Actor'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
