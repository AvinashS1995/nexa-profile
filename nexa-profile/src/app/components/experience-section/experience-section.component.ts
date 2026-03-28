import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  fromYear: string;
  toYear: string;
  currentlyWorking: boolean;
  project: string;
  description: string;
  techStack?: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent {
  @Input({ required: true }) data!: ExperienceItem[];
}
