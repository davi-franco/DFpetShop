import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinhaPetComponent } from './casinha-pet.component';

describe('CasinhaPetComponent', () => {
  let component: CasinhaPetComponent;
  let fixture: ComponentFixture<CasinhaPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinhaPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinhaPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
