import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupinhasPetComponent } from './roupinhas-pet.component';

describe('RoupinhasPetComponent', () => {
  let component: RoupinhasPetComponent;
  let fixture: ComponentFixture<RoupinhasPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupinhasPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupinhasPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
