import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoPassarinhoComponent } from './racao-passarinho.component';

describe('RacaoPassarinhoComponent', () => {
  let component: RacaoPassarinhoComponent;
  let fixture: ComponentFixture<RacaoPassarinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoPassarinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoPassarinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
