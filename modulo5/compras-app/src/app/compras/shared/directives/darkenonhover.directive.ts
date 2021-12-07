import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[darkenOnHover]'
})
export class DarkenOnHoverDirective {

    constructor(
        private element: ElementRef,
        private render: Renderer2
    ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(80%)')
    }
    
    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)')
    }
}