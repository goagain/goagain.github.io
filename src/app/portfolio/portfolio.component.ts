import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  constructor() { }
  portfolios = [
    {
      name: 'Conditional Probability Calculator',
      imgPath: 'assets/img/conditional-probability-formula.png',
      path: 'portfolio/conditional-probability-calculator'
    }];

  ngOnInit(): void {
  }

}

class Portfolio {
  name: string = '';
  imgPath: string = '';
  id: number = 1;
}