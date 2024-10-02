import { Component, signal } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TrendingComponentService } from './trending.component.service';
import { EventCardComponent } from "../shared/event-card/event-card.component";
import { EventModel } from '../shared/event-card/event.model';
import { SectionComponent } from "../shared/section/section.component";

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [ScrollerModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, EventCardComponent, SectionComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
  providers: [TrendingComponentService]
})
export class TrendingComponent {
  data = signal<EventModel[]>([]);

  constructor(private trendingComponentService: TrendingComponentService) {
    this.data.set(this.trendingComponentService.getData());
  }
}
