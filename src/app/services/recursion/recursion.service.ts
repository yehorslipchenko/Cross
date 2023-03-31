import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {

  constructor(@Optional() private logService: LogService) { }

  recursiveCalculate(x: number, precision: number = 0.01, term: number = 1, i: number = 1, result: number = 1): number {
    if (Math.abs(term) < precision) {
      let y = parseFloat(result.toFixed(2));
      this.logService.Log("x="+ x.toFixed(2) + "; y=" + y);
      return y;
    }
  
    term *= -x * x / (2 * i) / (2 * i - 1);
    result += term;
    i++;
  
    return this.recursiveCalculate(x, precision, term, i, result);
  }
}
