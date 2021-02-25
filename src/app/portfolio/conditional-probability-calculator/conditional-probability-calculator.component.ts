import { Component, NgModule, OnInit, Input, } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-conditional-probability-calculator',
  templateUrl: './conditional-probability-calculator.component.html',
  styleUrls: ['./conditional-probability-calculator.component.css']
})

export class ConditionalProbabilityCalculatorComponent implements OnInit {

  @Input() n: number = 3;
  @Input() m: number = 3;

  selected_i: number = 0;
  selected_j: number = 0;

  constructor() { }

  @Input()
  data: number[][] = [];
  onClickChangeSize() {
    while (this.data.length < this.n) {
      this.data.push([])
    }
    this.data = this.data.slice(0, this.n);

    for (let i = 0; i < this.n; i++) {
      if (this.data[i].length > this.m) {
        this.data[i] = this.data[i].slice(0, this.m)
      }
      else {
        for (let j = this.data[i].length; j < this.m; j++) {
          this.data[i][j] = this.randInt(10);
        }
      }
    }
    console.log(this.data)
  }

  onSelected(i: number, j: number): void {
    console.log(i, j)
    this.selected_i = i
    this.selected_j = j
  }

  getSum(): number {
    let sum = 0
    this.data.forEach(element =>
      element.forEach(value => sum += value)
    )
    return sum
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
  onClickInitialize() {
    this.data.forEach(element =>
      element.forEach((value, index) => element[index] = this.randInt(10))
    );
  }

  randInt(n: number): number {
    return Math.floor(Math.random() * n);
  }

  getRowSum(rowIndex: number): number {
    let sum = 0
    this.data[rowIndex].forEach(value => sum += value)
    return sum
  }
  getColumnSum(columnIndex: number): number {
    let sum = 0
    this.data.forEach(row => sum += row[columnIndex])
    return sum
  }
  ngOnInit(): void {
    this.onClickChangeSize()
  }

}
