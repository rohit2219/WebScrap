import { TestBed, inject } from '@angular/core/testing';

import { PythSrchService } from './PythSrchService.service';

describe('PythSrchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PythSrchService]
    });
  });

  it('should be created', inject([PythSrchService], (service: PythSrchService) => {
    expect(service).toBeTruthy();
  }));
});
