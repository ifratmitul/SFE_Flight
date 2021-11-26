import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { FlightFinderComponent } from './flight-finder.component';
import { FlightService } from './flight.service';
import {
  TranslateStore,
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';

describe('FlightFinderComponent', () => {
  let component: FlightFinderComponent;
  let fixture: ComponentFixture<FlightFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightFinderComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        TranslateModule.forChild(),
      ],
      providers: [
        FlightService,
        ToastrService,
        TranslateService,
        TranslateStore,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Test form group element count', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#searchForm');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(4);
  });

  it('Check Initial Form Value', () => {
    const searchFormGroup = component.searchForm;
    const initialFormValue = {
      DepartureAirportCode: 'MEL',
      ArrivalAirportCode: 'LHR',
      DepartureDate: new Date('2012-12-24T00:00:00+11:00'),
      ReturnDate: new Date('2013-01-03T00:00:00+11:00'),
    };
    expect(searchFormGroup.value).toEqual(initialFormValue);
  });

  it('Testing DepartureAirportCode Input validation with Invalid Data', () => {
    const DepartureCodeInput = fixture.debugElement.nativeElement
      .querySelector('#searchForm')
      .querySelectorAll('input')[0];
    DepartureCodeInput.value = 'ML';
    DepartureCodeInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const DepartureCodeInputGroup = component.searchForm.get(
      'DepartureAirportCode'
    );
    fixture.whenStable().then(() => {
      expect(DepartureCodeInputGroup.errors).not.toBeNull();
      expect(DepartureCodeInputGroup.errors.required).not.toBeTruthy();
    });
    expect(DepartureCodeInputGroup.value).toEqual('ML');
  });

  it('Testing DepartureAirportCode Input validation with Valid Data', () => {
    const DepartureCodeInput = fixture.debugElement.nativeElement
      .querySelector('#searchForm')
      .querySelectorAll('input')[0];
    DepartureCodeInput.value = 'MLL';
    DepartureCodeInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const DepartureCodeInputGroup = component.searchForm.get(
      'DepartureAirportCode'
    );
    fixture.whenStable().then(() => {
      expect(DepartureCodeInputGroup.errors).toBeNull();
    });
    expect(DepartureCodeInputGroup.value).toEqual('MLL');
  });

  it('Check if Initial Forms Value is Valid', () => {
    //Initial Value is Assigned while initializing form in flight-finder.component.ts file
    const isSearchFormValid = component.searchForm.valid;
    expect(isSearchFormValid).toBeTruthy();
  });

  it('Check Forms Validaity when Inputs are inValid', () => {
    const invalidFormValue = {
      DepartureAirportCode: 'ME$',
      ArrivalAirportCode: 'LHR',
      DepartureDate: new Date('2012-12-24T00:00:00+11:00'),
      ReturnDate: new Date('2013-01-03T00:00:00+11:00'),
    };
    const DepartureCodeInput = fixture.debugElement.nativeElement
      .querySelector('#searchForm')
      .querySelectorAll('input')[0];

    DepartureCodeInput.value = invalidFormValue.DepartureAirportCode;
    DepartureCodeInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const DepartureCodeInputGroup = component.searchForm.get(
      'DepartureAirportCode'
    );
    DepartureCodeInputGroup.setValue = DepartureCodeInput.value; //Puting one Invalid Data to one formcontrol which makes whole form invalid

    const isSearchFormInValid = component.searchForm.valid;
    expect(isSearchFormInValid).toBeFalsy();
  });
});
