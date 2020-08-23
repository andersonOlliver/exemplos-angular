import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoAbastecimentoComponent } from './ultimo-abastecimento.component';

describe('UltimoAbastecimentoComponent', () => {
  let component: UltimoAbastecimentoComponent;
  let fixture: ComponentFixture<UltimoAbastecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoAbastecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
