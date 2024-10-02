import { Component } from '@angular/core';
import { SectionComponent } from "../shared/section/section.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [SectionComponent, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.css'
})
export class SpotlightComponent {

}
