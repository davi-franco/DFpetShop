import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoPeixeComponent } from './racao-peixe.component';

describe('RacaoPeixeComponent', () => {
  let component: RacaoPeixeComponent;
  let fixture: ComponentFixture<RacaoPeixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoPeixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoPeixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
