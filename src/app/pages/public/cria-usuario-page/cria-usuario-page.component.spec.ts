import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaUsuarioPageComponent } from './cria-usuario-page.component';

describe('CriaUsuarioPageComponent', () => {
  let component: CriaUsuarioPageComponent;
  let fixture: ComponentFixture<CriaUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
