import { ComponentFixture, TestBed } from '@angular/core/testing';

import { characterDetailComponent } from './character-detail.component';

describe('characterDetailComponent', () => {
  let component: characterDetailComponent;
  let fixture: ComponentFixture<characterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ characterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(characterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
