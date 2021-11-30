import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeirasPetComponent } from './coleiras-pet.component';

describe('ColeirasPetComponent', () => {
  let component: ColeirasPetComponent;
  let fixture: ComponentFixture<ColeirasPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeirasPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeirasPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
