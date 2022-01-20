import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponentComponent } from './film-component.component';

describe('FilmComponentComponent', () => {
  let component: FilmComponentComponent;
  let fixture: ComponentFixture<FilmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
