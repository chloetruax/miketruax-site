import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {SkillsComponent} from "./skills/skills.component"
import {PortfolioComponent} from "./portfolio/portfolio.component";
export const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'food',  component: FoodComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: '**',   redirectTo: '/', pathMatch: 'full' },
];