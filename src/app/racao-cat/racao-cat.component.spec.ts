import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoCatComponent } from './racao-cat.component';

describe('RacaoCatComponent', () => {
  let component: RacaoCatComponent;
  let fixture: ComponentFixture<RacaoCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
