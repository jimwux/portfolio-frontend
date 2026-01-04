import { Component } from '@angular/core';
import { AboutHighlight, AboutLink } from '../../../shared/models/about.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  aboutLinks: AboutLink[] = [
    {
      label: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin',
      href: 'https://www.linkedin.com/in/jimenagomezwusinowski/'
    },
    {
      label: 'GitHub',
      iconClass: 'fa-brands fa-github',
      href: 'https://github.com/jimwux'
    }
  ];

  aboutHighlights: AboutHighlight[] = [
    {
      iconClass: 'fa-solid fa-code',
      title: 'Stack principal',
      text: 'Angular · Java · Spring Boot'
    },
    {
      iconClass: 'fa-solid fa-layer-group',
      title: 'Enfoque',
      text: 'APIs · Clean code · UX'
    },
    {
      iconClass: 'fa-solid fa-location-dot',
      title: 'Ubicación',
      text: 'Argentina'
    },
    {
      iconClass: 'fa-solid fa-language',
      title: 'Idiomas',
      text: 'Español nativo · Inglés básico'
    }
  ];

}
