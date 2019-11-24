import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';

@Component({
  selector: 'app-capitan-america',
  templateUrl: './capitan-america.component.html',
  styleUrls: ['./capitan-america.component.css']
})
export class CapitanAmericaComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Chris Evans',
      characterName: 'Steve Rogers/Captain America',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Hayley Atwell',
      characterName: 'Peggy Carter',
      gender: 'Female',
      status: 'Actress'
    },
    {
      actorName: 'Sebastian Stan',
      characterName: 'James Buchanan "Bucky" Barnes',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Tommy Lee Jones',
      characterName: 'Colonel Chester Phillips',
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
