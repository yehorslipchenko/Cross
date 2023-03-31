import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Tab function by: х=6; Expected result: y=0.96', () => {
    let x = 6.00;
    let expected = 0.96;
    let tab = service.tabulate(4, 9, 1);
    let actual = tab.get(x);
    if(actual != undefined){
      expect(expected).toBe(actual);
    }
  });
});
