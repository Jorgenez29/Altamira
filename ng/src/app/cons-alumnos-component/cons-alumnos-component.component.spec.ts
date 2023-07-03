import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsAlumnosComponentComponent } from './cons-alumnos-component.component';

describe('ConsAlumnosComponentComponent', () => {
  let component: ConsAlumnosComponentComponent;
  let fixture: ComponentFixture<ConsAlumnosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsAlumnosComponentComponent]
    });
    fixture = TestBed.createComponent(ConsAlumnosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
