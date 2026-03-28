import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent {
  @Input({ required: true }) data!: SkillCategory[];
}
