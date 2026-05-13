import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() contactRedirect = new EventEmitter<void>();

  showCodeDialog = false;

  getTechStack(project: ProjectItem): string[] {
    const fallback =
      project.role
        ?.split(',')
        .map((item) => item.trim())
        .filter(Boolean) ?? [];
    return project.techStack && project.techStack.length > 0
      ? project.techStack
      : fallback;
  }

  openCodeDialog() {
    this.showCodeDialog = true;
  }

  closeCodeDialog() {
    this.showCodeDialog = false;
  }

  goToContact() {
    this.showCodeDialog = false;
    this.contactRedirect.emit();
  }
}
