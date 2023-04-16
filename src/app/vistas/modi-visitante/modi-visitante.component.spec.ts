import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiVisitanteComponent } from './modi-visitante.component';

describe('ModiVisitanteComponent', () => {
  let component: ModiVisitanteComponent;
  let fixture: ComponentFixture<ModiVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
