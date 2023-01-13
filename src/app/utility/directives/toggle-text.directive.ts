import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleText]',
})
export class ToggleTextDirective {
  @HostListener('click')
  onClick() {
    this.toogle('hidden');
  }

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  toogle(className: string) {
    const elem = this.elem.nativeElement;
    if (elem.classList.contains(className)) {
      this.renderer.removeClass(elem, className);
    } else {
      this.renderer.addClass(elem, className);
    }
  }
}
