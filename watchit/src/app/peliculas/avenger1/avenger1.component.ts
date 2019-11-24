import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';

@Component({
  selector: 'app-avenger1',
  templateUrl: './avenger1.component.html',
  styleUrls: ['./avenger1.component.css']
})
export class Avenger1Component implements OnInit {
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
      actorName: 'Samuel L. Jackson',
      characterName: 'Nicholas "Nick" Fury',
      gender: 'Male',
      status: 'Actor'
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
