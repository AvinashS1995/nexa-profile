import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { portfolioData } from './data/portfolio-data';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  portfolio = portfolioData[0];

  navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
    { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-solid fa-code' },
    { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'projects', label: 'Projects', icon: 'fa-solid fa-folder-open' },
    { id: 'services', label: 'Services', icon: 'fa-solid fa-wrench' },
    { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
  ];

  activeSection = 'home';
  showScrollTop = false;
  isMobileMenuOpen = false;

  private sectionIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'services', 'contact'];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 500;

    const scrollPosition = window.scrollY + 120;
    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) {
        continue;
      }
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        this.activeSection = sectionId;
        break;
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const target = element.offsetTop - offset;
      window.scrollTo({ top: target, behavior: 'smooth' });
      this.isMobileMenuOpen = false;
    }
  }

  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
