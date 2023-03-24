import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from 'chart.js'

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.page.html',
  styleUrls: ['./lab2.page.scss'],
})
export class Lab2Page implements OnInit {

  @ViewChild('myChart') private myChart?: ElementRef;

  xn: number = -2.46
  xk : number = 28.8
  a : number = 0
  h : number = 0.6
  result : string[] = []

  chart: any;

  ngOnInit() {
  }

  ngAfterViewInit() {
    Chart.register(...registerables);
  }

  calculate() {
    const labels = [];
    const data = [];

    for (let x = this.xn; x <= this.xk; x += this.h) {
      if(x <= 0){
        var s = "x=" + x.toFixed(2) + "; y=" + this.func1(x).toFixed(2) + ";"
        labels.push(x.toFixed(2));
        data.push(this.func1(x).toFixed(2));
        this.result.push(s)
      }
      if(x <= this.a && x > 0){
        var s = "x=" + x.toFixed(2) + "; y=" + this.func2(x).toFixed(2) + ";"
        labels.push(x.toFixed(2));
        data.push(this.func2(x).toFixed(2));
        this.result.push(s)
      }
      if(this.a < x){
        var s = "x=" + x.toFixed(2)+ "; y=" + this.func3(x).toFixed(2) + ";"
        labels.push(x.toFixed(2));
        data.push(this.func3(x).toFixed(2));
        this.result.push(s)
      }
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.myChart?.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'f(x)',
          data,
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

  func1(x: number): number {
    return ((3 * x - 1) ** 2) / x ** 5;
  }

  func2(x: number): number {
    return Math.log(Math.abs(Math.sqrt(x + 5))) ** 2;
  }

  func3(x: number): number {
    return Math.cos(Math.sqrt(1 + (x ** 2)));
  }

  simpleParabola(x: number): number{
    return x ** 2;
  }
}
