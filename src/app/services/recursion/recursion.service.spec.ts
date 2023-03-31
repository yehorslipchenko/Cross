import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Series function by: х=6; Expected result: y=0.96', () => {
    let x = 6.00;
    let expected = 0.96;
    let actual = service.recursiveCalculate(6);
    if(actual != undefined){
      expect(expected).toBe(actual);
    }
  });
});
