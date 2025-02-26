// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { LoanDetailsComponent } from './loan-details.component';


describe('LoanDetailsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LoanDetailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [

      ]
    }).overrideComponent(LoanDetailsComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(LoanDetailsComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #isValid()', async () => {
    component.loanDetail = component.loanDetail || {};
    component.loanDetail.purpose = 'purpose';
    component.loanDetail.vehiclePrice = 'vehiclePrice';
    component.loanDetail.deposit = 'deposit';
    component.loanDetail.term = 'term';
    component.isValid();

  });

  it('should run #onSubmit()', async () => {
    component.submit = component.submit || {};
    spyOn(component.submit, 'emit');
    component.onSubmit();
    expect(component.submit.emit).toHaveBeenCalled();
  });

});