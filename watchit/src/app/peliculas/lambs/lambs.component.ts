import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';


@Component({
  selector: 'app-lambs',
  templateUrl: './lambs.component.html',
  styleUrls: ['./lambs.component.css']
})
export class LambsComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Lukas',
      characterName: 'Himself',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'Asan',
      characterName: 'Himself',
      gender: 'Male',
      status: 'Actor'
    },
    {
      actorName: 'X',
      characterName: 'Himself',
      gender: 'Male',
      status: 'Actor'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
