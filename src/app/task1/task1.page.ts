import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.page.html',
  styleUrls: ['./task1.page.scss'],
})
export class Task1Page implements OnInit {

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: number = 0;

  constructor() {}

  ngOnInit() {
  }

  

  calculate() {
    if (this.num1 % 2 == 0 && this.num2 % 2 == 0 && this.num3 % 2 == 0) {
      this.result = this.num1 * this.num2 * this.num3;
    } else {
      let sum = this.num1 + this.num2 + this.num3;
      this.result = sum * sum;
    }
  }
}
