import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../core/service/api.service';

interface ContactInfo {
  location?: {
    company: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
  };
  email?: string;
  phone?: string;
  socialMedia?: {
    linkedin?: string | null;
    github?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    facebook?: string | null;
  };
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent {
  @Input({ required: true }) data!: ContactInfo;

  constructor(private apiService: ApiService) {}

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  successMessage = '';

  handleSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.apiService.sendMessage(form.value).subscribe((res) => {
      this.successMessage = res.message;

      form.resetForm();
      setTimeout(() => {
        this.successMessage = '';
      }, 4000);
    });
  }
}
