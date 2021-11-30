import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoDogComponent } from './racao-dog.component';

describe('RacaoDogComponent', () => {
  let component: RacaoDogComponent;
  let fixture: ComponentFixture<RacaoDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
