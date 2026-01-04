import { Component } from '@angular/core';
import { Skill } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillCategories: Skill[] = [
    {
      title: 'Frontend',
      icon: 'fa-solid fa-laptop-code',
      skills: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'Ionic',
        'HTML',
        'CSS',
        'Bootstrap 5'
      ]
    },
    {
      title: 'Backend',
      icon: 'fa-solid fa-server',
      skills: [
        'Java',
        'Spring Boot',
        'JUnit',
        'Mockito'
      ]
    },
    {
      title: 'Bases de datos',
      icon: 'fa-solid fa-database',
      skills: [
        'Hibernate',
        'CriteriaQuery',
        'MySQL',
        'SQL Server'
      ]
    },
    {
      title: 'Diseño',
      icon: 'fa-solid fa-crop-simple',
      skills: [
        'Figma',
        'Canva'
      ]
    }
  ];

}
