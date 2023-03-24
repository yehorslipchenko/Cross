import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
})
export class Task2Page implements OnInit {

  sum: number = 0;
  a: number = 0;
  b: number = 0;

  constructor() { }

  ngOnInit() {
  }

  findSum() {
    for (let i = this.a; i <= this.b; i++) {
      if (i % 19 == 0 && i % 3 == 2) {
        this.sum += i;
      }
    }
  }
}
