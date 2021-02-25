import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ConditionalProbabilityCalculatorComponent } from './portfolio/conditional-probability-calculator/conditional-probability-calculator.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about-me', component: AboutmeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/conditional-probability-calculator', component: ConditionalProbabilityCalculatorComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
