import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.page.html',
  styleUrls: ['./task3.page.scss'],
})
export class Task3Page implements OnInit {
  matrixSize: number = 5;
  matrix: number[][] = [[]];
  blueNumbers: number[] = [];
  product: number = 0;

  constructor() { }

  ngOnInit() {}

  generateMatrix(): void {
    this.matrix = Array.from({ length: this.matrixSize }, () =>
      Array.from({ length: this.matrixSize }, () => Math.floor(Math.random() * 10) + 1)
    );
    this.findBlueNumbers();
  }

  findBlueNumbers(): void {
    this.blueNumbers = [];
    this.product = 1;
    for (let row of this.matrix) {
      for (let cell of row) {
        if (cell % 3 === 0 && cell % 2 === 1) {
          this.blueNumbers.push(cell);
          this.product *= cell;
        }
      }
    }
  }
}
