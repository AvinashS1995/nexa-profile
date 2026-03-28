import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ProjectItem {
  title: string;
  category: string;
  role: string;
  description: string;
  codeLink: string;
  previewLink: string;
  techStack?: string[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent {
  @Input({ required: true }) data!: ProjectItem[];

  getTechStack(project: ProjectItem): string[] {
    const fallback = project.role?.split(',').map((item) => item.trim()).filter(Boolean) ?? [];
    return project.techStack && project.techStack.length > 0 ? project.techStack : fallback;
  }
}
