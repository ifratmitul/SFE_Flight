import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFinderComponent } from './flight-finder.component';

describe('FlightFinderComponent', () => {
  let component: FlightFinderComponent;
  let fixture: ComponentFixture<FlightFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
