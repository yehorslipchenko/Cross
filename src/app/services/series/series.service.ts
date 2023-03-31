import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(@Optional() private logService: LogService) { }

  seriesCalculate(x: number):number
  {
    let result = 1;
    let term = 1;
    let i = 1;
    const precision = 0.01;

    while (Math.abs(term) >= precision) {
      term *= -x * x / (2 * i) / (2 * i - 1);
      result += term;
      i++;
    }
    let y = parseFloat(result.toFixed(2));
    this.logService.Log("x="+ x.toFixed(2) + "; y=" + y);
    return y;
  }
}
