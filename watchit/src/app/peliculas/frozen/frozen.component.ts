import { Component, OnInit } from '@angular/core';
import Character from '../../Characters';


@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrls: ['./frozen.component.css']
})
export class FrozenComponent implements OnInit {
  characters: Character[] = [
    {
      actorName: 'Kristen Bell',
      characterName: 'Anna',
      gender: 'Female',
      status: 'Voice Actress'
    },
    {
      actorName: 'Idina Menzel',
      characterName: 'Elsa',
      gender: 'Female',
      status: 'Voice Actress'
    },
    {
      actorName: 'Josh Gad',
      characterName: 'Olaf',
      gender: 'Male',
      status: 'Voice Actor'
    },
    {
      actorName: 'Jonathan Groff',
      characterName: 'Kristoff',
      gender: 'Male',
      status: 'Voice Actor'
    },
    {
      actorName: 'Sterling K. Brown',
      characterName: 'Mattias',
      gender: 'Male',
      status: 'Voice Actor'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
