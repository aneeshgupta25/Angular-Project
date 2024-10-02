import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  title = input.required<string>();

  ngOnInit() {
    console.log(this.title());
  }
}
