import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EventsGenreModel } from './events-genre.model';
import { EventsGenreService } from './events-genre.service';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-events-genre',
  standalone: true,
  imports: [MatListModule, MatCardModule, CarouselModule, TagModule, MatIconModule],
  providers: [EventsGenreService],
  templateUrl: './events-genre.component.html',
  styleUrl: './events-genre.component.css',
})
export class EventsGenreComponent {
  genres: EventsGenreModel[] = [];

  constructor(private eventsGenreService: EventsGenreService) {
    this.genres = this.eventsGenreService.getData();
  }
}
