import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLibrosComponentComponent } from './cons-libros-component.component';

describe('ConsLibrosComponentComponent', () => {
  let component: ConsLibrosComponentComponent;
  let fixture: ComponentFixture<ConsLibrosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsLibrosComponentComponent]
    });
    fixture = TestBed.createComponent(ConsLibrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
