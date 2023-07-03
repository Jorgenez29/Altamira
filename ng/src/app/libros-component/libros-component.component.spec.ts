import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosComponentComponent } from './libros-component.component';

describe('LibrosComponentComponent', () => {
  let component: LibrosComponentComponent;
  let fixture: ComponentFixture<LibrosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosComponentComponent]
    });
    fixture = TestBed.createComponent(LibrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
