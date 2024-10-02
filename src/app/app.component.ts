import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CarouselCardsComponent } from './carousel-cards/carousel-cards.component';
import { EventsGenreComponent } from "./events-genre/events-genre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CarouselCardsComponent, EventsGenreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
