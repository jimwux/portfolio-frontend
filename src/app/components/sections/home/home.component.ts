import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  ,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @Input() rainSvg: string = 'img/home/hoja.svg';

  @Input() drops?: number;

  @ViewChild('rainContainer') rainContainer!: ElementRef<HTMLDivElement>;

  private created: HTMLElement[] = [];

  ngAfterViewInit(): void {
    const total = this.drops ?? (window.innerWidth < 768 ? 10 : window.innerWidth < 1200 ? 28 : 52);

    for (let i = 0; i < total; i++) {
      const el = document.createElement('div');
      el.className = 'drop';

      const scale = (Math.random() * 0.9 + 0.6).toFixed(2);
      el.style.setProperty('--s', String(scale));

  const sway = Math.floor((Math.random() - 0.5) * 160) + 'px';
  const swaySmall = Math.floor((Math.random() - 0.5) * 60) + 'px';
  el.style.setProperty('--x', sway);
  el.style.setProperty('--sx', swaySmall);

  const rot = Math.floor((Math.random() - 0.5) * 720) + 'deg';
  el.style.setProperty('--r', rot);

  const bucketCenter = (i + 0.5) / total * 100;
  const jitter = (Math.random() - 0.5) * (100 / total) * 0.9;
  const leftPercent = Math.min(100, Math.max(0, bucketCenter + jitter));
  el.style.left = `${leftPercent}%`;

  const duration = (18 + Math.random() * 18).toFixed(2) + 's'; // 18s - 36s
  const delay = (Math.random() * -24).toFixed(2) + 's'; // -0s a -24s
      el.style.animationDuration = duration;
      el.style.animationDelay = delay;

  const base = window.innerWidth < 768 ? 28 : 48;
      const size = Math.max(10, Math.round(base * Number(scale)));
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

  el.style.backgroundImage = `url('${this.rainSvg}')`;

  el.style.position = 'absolute';
  el.style.top = '-10vh';
  el.style.backgroundSize = 'contain';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
  el.style.opacity = '0.16';
  el.style.transformOrigin = 'center';
  (el.style as any).willChange = 'transform, opacity';
  el.style.animationName = 'fall';
  el.style.animationTimingFunction = 'linear';
  el.style.animationIterationCount = 'infinite';

      this.rainContainer.nativeElement.appendChild(el);
      this.created.push(el);
    }
  }

  ngOnDestroy(): void {
    this.created.forEach(e => e.remove());
    this.created = [];
  }
}
