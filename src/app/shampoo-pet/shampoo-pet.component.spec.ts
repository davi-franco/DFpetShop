import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooPetComponent } from './shampoo-pet.component';

describe('ShampooPetComponent', () => {
  let component: ShampooPetComponent;
  let fixture: ComponentFixture<ShampooPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampooPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampooPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
