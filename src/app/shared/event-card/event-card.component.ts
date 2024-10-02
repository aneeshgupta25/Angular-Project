import { Component, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { EventLabels, EventModel } from './event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit {
  event = input.required<EventModel>();
  labelColor!: string;
  labelTextColor !: string;

  ngOnInit(): void {
    switch (this.event().label) {
      case EventLabels.BEST_PRICE:
        this.labelColor = '#E4FFEA';
        this.labelTextColor = '#1EAF3B';
        break;
      case EventLabels.MOST_POPULAR:
        this.labelColor = '#FFFDE4';
        this.labelTextColor = '#E1AC01';
        break;
      case EventLabels.TOP_SELLING:
        this.labelColor = '#FFE4E4';
        this.labelTextColor = '#E41313';
        break;
      default: {
        // NO OPERATION
      }
    }
  }
}
