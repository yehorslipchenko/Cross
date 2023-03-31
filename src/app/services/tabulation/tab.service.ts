import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  tabulate(xn: number = -9.14, xk: number = 9.14, h: number = 0.1):Map<number,number>
  {
    for(let x = xn; x <= xk; x+=h)
    {
      this.xy.set(x.toFixed(2),this.f(x).toFixed(2));
      this.logService.Log("x="+ x.toFixed(2) + "; y=" + this.f(x).toFixed(2));
    }
    return this.xy;
  }

  f(x: number): number{
    return Math.cos(x);
  }
}
