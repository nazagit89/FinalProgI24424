import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosAseguradosComponent } from './objetos-asegurados.component';

describe('ObjetosAseguradosComponent', () => {
  let component: ObjetosAseguradosComponent;
  let fixture: ComponentFixture<ObjetosAseguradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetosAseguradosComponent]
    });
    fixture = TestBed.createComponent(ObjetosAseguradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
