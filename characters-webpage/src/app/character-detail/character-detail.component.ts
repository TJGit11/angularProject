import { Component, OnInit, Input } from '@angular/core';

import { character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class characterDetailComponent implements OnInit {

  @Input() character?: character;

  constructor() { }

  ngOnInit(): void {
  }

}
