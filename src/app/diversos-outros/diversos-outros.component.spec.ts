import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosOutrosComponent } from './diversos-outros.component';

describe('DiversosOutrosComponent', () => {
  let component: DiversosOutrosComponent;
  let fixture: ComponentFixture<DiversosOutrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversosOutrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosOutrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
