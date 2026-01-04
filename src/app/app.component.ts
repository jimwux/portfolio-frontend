import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SkillsComponent } from "./components/sections/skills/skills.component";
import { HomeComponent } from './components/sections/home/home.component';
import { ExperienceComponent } from "./components/sections/experience/experience.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { EducationComponent } from "./components/sections/education/education.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/sections/contact/contact.component";
import { ToastComponent } from "./components/toast/toast.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, SkillsComponent, ExperienceComponent, AboutComponent, EducationComponent, FooterComponent, ContactComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
