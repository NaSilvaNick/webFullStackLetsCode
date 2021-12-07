import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[underlineOnHover]'
})
export class UnderlineOnHoverDirective {

    constructor(
        private element: ElementRef,
        private render: Renderer2
    ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setStyle(this.element.nativeElement, 'text-decoration', 'underline')
    }
    
    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.element.nativeElement, 'text-decoration', 'none')
    }
}