import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface HeroData {
  name: string;
  description: string;
  roles: string[];
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  @Input({ required: true }) data!: HeroData;

  scrollToNext() {
    const section = document.getElementById('about');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  get initialLetter(): string {
    return this.data.name && this.data.name.length ? this.data.name.charAt(0) : 'U';
  }
}
