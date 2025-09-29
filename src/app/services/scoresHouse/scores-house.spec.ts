import { TestBed } from '@angular/core/testing';

import { ScoresHouse } from './scores-house';

describe('ScoresHouse', () => {
  let service: ScoresHouse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresHouse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
