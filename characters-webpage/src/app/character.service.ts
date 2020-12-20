import { Injectable } from '@angular/core';
import { character } from './character';
import { characters } from './mock-characters';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class characterService {
  getcharacters(): Observable<character[]> {
    this.messageService.add('characterService: fetched characters');
    return of(characters);
  }

  constructor(private messageService: MessageService) { }
}