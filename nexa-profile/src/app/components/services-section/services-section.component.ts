import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ServiceItem {
  title: string;
  icon: string;
  color: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent {
  @Input({ required: true }) data!: ServiceItem[];
}
