/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixabayComponent } from './pixabay.component';

describe('PixabayComponent', () => {
  let component: PixabayComponent;
  let fixture: ComponentFixture<PixabayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixabayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixabayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});