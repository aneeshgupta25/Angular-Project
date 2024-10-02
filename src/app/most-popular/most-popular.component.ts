import { Component, signal } from '@angular/core';
import { SectionComponent } from '../shared/section/section.component';
import { EventCardComponent } from "../shared/event-card/event-card.component";
import { EventModel } from '../shared/event-card/event.model';
import { MostPopularService } from './most-popular.service';
import { ScrollerModule } from 'primeng/scroller';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [SectionComponent, EventCardComponent, ScrollerModule],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css',
  providers: [MostPopularService]
})
export class MostPopularComponent {
  data = signal<EventModel[]>([]);

  constructor(private mostPopularService: MostPopularService) {
    this.data.set(this.mostPopularService.getData());
  }
}
