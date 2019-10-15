import { TestBed } from '@angular/core/testing';

import { MultiplicationService } from './multiplication.service';

describe('MultiplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplicationService = TestBed.get(MultiplicationService);
    expect(service).toBeTruthy();
  });
});
