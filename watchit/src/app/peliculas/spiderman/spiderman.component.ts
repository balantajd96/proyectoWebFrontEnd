import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';

@Component({
  selector: 'app-spiderman',
  templateUrl: './spiderman.component.html',
  styleUrls: ['./spiderman.component.css']
})
export class SpidermanComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Tom Holland',
      characterName: 'Peter Parker/Spiderman',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Samuel L. Jackson',
      characterName: 'Nicholas "Nick" Fury',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Jake Gyllenhaal',
      characterName: 'Quentin Beck/Mysterio',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Jon Favreau',
      characterName: 'Happy Hogan',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Marisa Tomei',
      characterName: 'May Parker',
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
