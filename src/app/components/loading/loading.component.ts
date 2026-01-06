import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();

  isLoaded = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.completeLoading();
      }, 900);
    }
  }

  private completeLoading(): void {
    this.isLoaded = true;
    setTimeout(() => {
      this.loadingComplete.emit();
    }, 800);
  }
}
