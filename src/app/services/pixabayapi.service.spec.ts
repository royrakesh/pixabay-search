/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PixabayapiService } from './pixabayapi.service';

describe('Service: Pixabayapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayapiService]
    });
  });

  it('should ...', inject([PixabayapiService], (service: PixabayapiService) => {
    expect(service).toBeTruthy();
  }));
});