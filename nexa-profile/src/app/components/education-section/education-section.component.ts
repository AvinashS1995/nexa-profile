import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface EducationItem {
  degree: string;
  university: string;
  fromYear: string;
  toYear: string;
  currentlyStudying: boolean;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  @Input({ required: true }) data!: EducationItem[];
}
