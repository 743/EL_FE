// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, UserDetailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [

      ]
    }).overrideComponent(UserDetailsComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailsComponent);
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
    component.user = component.user || {};
    component.user.firstName = 'firstName';
    component.user.lastName = 'lastName';
    component.user.email = 'email';
    component.user.employmentStatus = 'employmentStatus';
    component.user.employerName = 'employerName';
    component.isValid();

  });

  it('should run #onNext()', async () => {
    component.user = component.user || {};
    component.user.employmentStatus = 'employmentStatus';
    component.user.employerName = 'employerName';
    spyOn(component.next, 'emit');
    component.onNext();
    expect(component.next.emit).toHaveBeenCalled();
  });

});