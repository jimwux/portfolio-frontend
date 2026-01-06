import { Component } from '@angular/core';
import { ContactCard, ContactFormPayload } from '../../../shared/models/contact.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../shared/services/contact.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FadeInOnViewDirective } from '../../../shared/directives/fade-in-on-view.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, FadeInOnViewDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  sending = false;

  mapUrl: SafeResourceUrl;
  mapLabel = 'Castelar, Argentina';
  private readonly mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52438.89273548268!2d-58.66960677832031!3d-34.65255829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc65a9d3ff9a5%3A0x5b9e1b3b0f3f3f3f!2sCastelar%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1640000000000!5m2!1ses!2sar';

  cards: ContactCard[] = [
    {
      type: 'email',
      title: 'Email',
      value: 'jimenagomezwusi@hotmail.com',
      helper: 'Respuesta dentro de 24 hs aprox.',
      icon: 'fa-solid fa-envelope',
      href: 'mailto:jimenagomezwusi@hotmail.com',
    },
    {
      type: 'phone',
      title: 'Teléfono',
      value: '+54 11 2253-8331',
      helper: 'Lun a Vie • 9 a 18',
      icon: 'fa-solid fa-phone',
      href: 'tel:+541122538331',
    },
    {
      type: 'social',
      title: 'GitHub',
      value: 'Ver repositorios',
      helper: 'Mis proyectos y código',
      icon: 'fa-brands fa-github',
      href: 'https://github.com/jimwux/',
      targetBlank: true,
    },
    {
      type: 'social',
      title: 'LinkedIn',
      value: 'Conectar',
      helper: 'Networking y experiencia',
      icon: 'fa-brands fa-linkedin',
      href: 'https://www.linkedin.com/in/jimenagomezwusinowski/',
      targetBlank: true,
    },
  ];

  form!: ReturnType<FormBuilder['group']>;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastService: ToastService,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapEmbedUrl);
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      if (this.f['name'].invalid) {
        this.toastService.error('Por favor, ingresá tu nombre.');
      } else if (this.f['email'].invalid) {
        this.toastService.error('Por favor, ingresá un email válido.');
      } else if (this.f['message'].invalid) {
        this.toastService.error('Por favor, escribí un mensaje (mínimo 10 caracteres).');
      }

      return;
    }

    const payload: ContactFormPayload = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      message: this.form.value.message!,
    };

    this.sending = true;

    this.contactService.send(payload).subscribe({
      next: () => {
        this.sending = false;
        this.toastService.success('¡Mensaje enviado! Gracias por escribirme');
        this.form.reset();
      },
      error: () => {
        this.sending = false;
        this.toastService.error('No se pudo enviar el mensaje. Probá de nuevo en un rato.');
      },
    });
  }

}
