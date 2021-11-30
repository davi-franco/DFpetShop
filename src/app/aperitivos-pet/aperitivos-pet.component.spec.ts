import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivosPetComponent } from './aperitivos-pet.component';

describe('AperitivosPetComponent', () => {
  let component: AperitivosPetComponent;
  let fixture: ComponentFixture<AperitivosPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivosPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AperitivosPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
