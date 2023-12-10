import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighLight: string = '';
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (!this.appHighLight) {
      this.el.nativeElement.style.color = 'blue';
      return;
    }
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
