import { TestBed } from '@angular/core/testing';

import { characterService } from './character.service';

describe('characterService', () => {
  let service: characterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(characterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
