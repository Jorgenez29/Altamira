import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponentComponent } from './alumnos-component.component';

describe('AlumnosComponentComponent', () => {
  let component: AlumnosComponentComponent;
  let fixture: ComponentFixture<AlumnosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosComponentComponent]
    });
    fixture = TestBed.createComponent(AlumnosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
