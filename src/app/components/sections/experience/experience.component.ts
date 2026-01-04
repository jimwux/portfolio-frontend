import { Component } from '@angular/core';
import { Experience } from '../../../shared/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      role: 'Desarrolladora Fullstack',
      companyGroup: 'NetOne',
      company: 'Wise Capital',
      date: 'Ago 2025 - Actualidad',
      responsibilities: [
        'Desarrollo de funcionalidades fullstack en una plataforma financiera, integrando frontend y backend.',
        'Trabajo con arquitecturas basadas en APIs, priorizando calidad de código y experiencia de usuario.',
        'Implementación de mejoras y mantenimiento evolutivo, colaborando con el equipo para entregar nuevas features.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'JavaScript',
        'MySQL',
        'Hibernate',
        'Bootstrap 5'
      ]
    },
    {
      role: 'Desarrolladora Fullstack',
      companyGroup: 'NetOne',
      company: 'Netegia',
      date: 'Nov 2024 - Ago 2025',
      responsibilities: [
        'Desarrollo y mantenimiento de funcionalidades en un ERP, trabajando tanto en frontend como backend.',
        'Integración y consumo de servicios/APIs, mejorando flujos y consistencia en la aplicación.',
        'Colaboración en mejoras de UI, cuidando usabilidad y consistencia visual.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'Ionic',
        'MySQL',
        'Hibernate',
        'Bootstrap 5'
      ]
    }
  ];


}
