/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KotakuService } from './kotaku.service';

describe('Service: Kotaku', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KotakuService]
    });
  });

  it('should ...', inject([KotakuService], (service: KotakuService) => {
    expect(service).toBeTruthy();
  }));
});
