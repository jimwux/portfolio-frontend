import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fadeInOnView]',
  standalone: true
})
export class FadeInOnViewDirective implements OnInit, OnDestroy {
  @Input() fadeInClass = 'fade-in-on-view';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'pre-fade');
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
            this.renderer.addClass(this.el.nativeElement, this.fadeInClass);
            this.renderer.removeClass(this.el.nativeElement, 'pre-fade');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: [0.15, 0.25, 0.4],
        rootMargin: '0px 0px -20% 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
