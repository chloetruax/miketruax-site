import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";

import {HomeComponent} from "./home/home.component";
import {FoodService} from "./services/food.service";
import {SkillsService} from "./services/skills.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {SkillsComponent} from "./skills/skills.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";





@NgModule({
  declarations: [
    AppComponent, FoodComponent, AboutComponent,
    PortfolioComponent, SkillsComponent, HomeComponent,
    TicTacToeComponent, MovieSearchComponent, CapitalizePipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
  ],
  providers: [FoodService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }