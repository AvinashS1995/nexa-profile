import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface AboutData {
  name: string;
  title: string;
  bio: string;
  bio2?: string;
  stats: {
    experience: number;
    clients: number;
    recruiters: number;
  };
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent {
  @Input({ required: true }) data!: AboutData;
}
