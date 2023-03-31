import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Series function by: х=6; Expected result: y=0.96', () => {
    let x = 6.00;
    let expected = 0.96;
    let actual = service.seriesCalculate(x);
    if(actual != undefined){
      expect(expected).toBe(actual);
    }
  });
});
