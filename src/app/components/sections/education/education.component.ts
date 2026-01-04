import { Component } from '@angular/core';
import { Education } from '../../../shared/models/education.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  education: Education[] = [
    {
      institution: 'Universidad Nacional de La Matanza',
      title: 'Tecnicatura en Desarrollo Web',
      date: 'Mar 2023 - Actualidad',
      description:
        'Formación en desarrollo y administración de aplicaciones web, tecnologías multimedia y TIC, con énfasis en Java, seguridad, calidad y accesibilidad.',
      tags: ['Desarrollo Web', 'Java', 'Accesibilidad'],
      image: 'img/education/unlam.png',
      imageAlt: 'Universidad Nacional de La Matanza'
    },
    {
      institution: 'Codo a Codo 4.0',
      title: 'Diseño UX-UI',
      date: 'Ago 2022 - Dic 2022',
      description:
        'Formación integral en diseño de interfaces atractivas y coherentes, enfocadas en mejorar la experiencia de usuario. Uso de herramientas como Figma, Illustrator y Photoshop.',
      tags: ['UX/UI', 'Figma', 'Prototipado'],
      image: 'img/education/codo-a-codo.png',
      imageAlt: 'Codo a Codo 4.0'
    }
  ];

}
