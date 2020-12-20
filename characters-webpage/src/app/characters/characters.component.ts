import { Component, OnInit } from '@angular/core';
import { character } from '../character';

import { characterService } from '../character.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class charactersComponent implements OnInit {
  characters?: character[];

  selectedcharacter?: character;

  constructor(private characterService: characterService, private messageService: MessageService) { }

  getcharacters(): void {
    this.characterService.getcharacters()
        .subscribe(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getcharacters();
  }

  onSelect(character: character): void {
    this.selectedcharacter = character;
    this.messageService.add(`characterComponent: Selected character id=${character.id}`);
  }
}