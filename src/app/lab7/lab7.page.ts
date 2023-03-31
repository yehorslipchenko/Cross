import 'chart.js/auto';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LogService } from '../services/logger/log.service';
import { RecursionService } from '../services/recursion/recursion.service';
import { SeriesService } from '../services/series/series.service';
import { TabService } from '../services/tabulation/tab.service';

interface Action {
  id: number;
  name: string;
  func: () => void;
}

@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page implements OnInit {
  @ViewChild('myChart') private myChart?: ElementRef;

  xn: number = -9.14
  xk : number = 9.14
  h : number = 0.1
  data: 
  {
    x: number, 
    y: number
  }[] = []
  result : string[] = []

  chart: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    Chart.register(...registerables);
  }

  public tabulation(): void {
    const log = new LogService();
    const tab = new TabService(log);

    let xy = tab.tabulate(this.xn, this.xk, this.h);
    console.log(xy)
    this.data = Array.from(xy).map(([x, y]) => ({x, y}));

    const localLabels = [];
    const localData = [];

    for(let i = 0; i < this.data.length; i += 1){
      localLabels.push(this.data[i].x);
      localData.push(this.data[i].y);
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: localLabels,
        datasets: [{
          label: 'f(x)',
          data: localData,
          fill: false,
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'x'
            }
          },
          y: {
            title: {
              display: true,
              text: 'f(x)'
            }
          }
        }
      }
    });
  }

  public teylors(): void {
    console.log("Teylors work");
    const log = new LogService();
    const series = new SeriesService(log);

    const localLabels = [];
    const localData = [];

    for(let x = this.xn; x < this.xk; x += this.h){
      x = parseFloat(x.toFixed(2));
      localLabels.push(x);
      let y = series.seriesCalculate(x);
      localData.push(y);
      this.data.push({x, y});
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: localLabels,
        datasets: [{
          label: 'f(x)',
          data: localData,
          fill: false,
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'x'
            }
          },
          y: {
            title: {
              display: true,
              text: 'f(x)'
            }
          }
        }
      }
    });
  }

  public recurcive(): void {
    const log = new LogService();
    const rec = new RecursionService(log);

    const localLabels = [];
    const localData = [];

    for(let x = this.xn; x < this.xk; x += this.h){
      x = parseFloat(x.toFixed(2));
      localLabels.push(x);
      let y = rec.recursiveCalculate(x);
      localData.push(y);
      this.data.push({x, y});
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: localLabels,
        datasets: [{
          label: 'f(x)',
          data: localData,
          fill: false,
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'x'
            }
          },
          y: {
            title: {
              display: true,
              text: 'f(x)'
            }
          }
        }
      }
    });
  }
}
