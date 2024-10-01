import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselCardsService } from './carousel-cards.service';
import { CarouselCardsModel } from './carousel-cards.model';

@Component({
  selector: 'app-carousel-cards',
  standalone: true,
  imports: [CarouselModule, MatButtonModule, MatCardModule, TagModule],
  providers: [CarouselCardsService],
  templateUrl: './carousel-cards.component.html',
  styleUrl: './carousel-cards.component.css'
})
export class CarouselCardsComponent {

  data: CarouselCardsModel[] = [];
  extendedData: CarouselCardsModel[] = [];

  constructor(private carouselCardsService: CarouselCardsService) {
    this.data = this.carouselCardsService.getData()
    this.extendedData = [...this.data, ...this.data];
  }

}
