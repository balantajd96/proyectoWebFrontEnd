import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';




@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Chris Evans',
      characterName: 'Steve Rogers/Captain America',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Robert Downey Jr',
      characterName: 'Tony Stark/Iron Man',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Scarlett Johansson',
      characterName: 'Natasha Romanoff/Black Widow',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Brie Larson',
      characterName: 'Carol Danvers/Captain Marvel',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Stan Lee',
      characterName: 'Stan Lee',
      gender: 'Male',
      status: 'Cameo'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
