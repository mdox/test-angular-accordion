import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { AccordionService } from './accordion.service';

@Directive({
    selector: '[accordion-show-button]',
})
export class AccordionShowButtonDirective implements OnInit {
    @HostListener("click")
    handleClick() {
        this.accordionService.setIsShow(true);
    }

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private accordionService: AccordionService
    ) {}

    ngOnInit() {
        this.accordionService.isShow.subscribe(() => this.checkVisibility());
        this.checkVisibility();
    }

    checkVisibility() {
        if (this.accordionService.getIsShow()) {
            this.elementRef.nativeElement.style.setProperty('display', 'none');
        } else {
            this.elementRef.nativeElement.style.removeProperty('display');
        }
    }
}

@Directive({
    selector: '[accordion-hide-button]',
})
export class AccordionHideButtonDirective implements OnInit {
    @HostListener("click")
    handleClick() {
        this.accordionService.setIsShow(false);
    }

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private accordionService: AccordionService
    ) {}

    ngOnInit() {
        this.accordionService.isShow.subscribe(() => this.checkVisibility());
        this.checkVisibility();
    }

    checkVisibility() {
        if (this.accordionService.getIsShow()) {
            this.elementRef.nativeElement.style.removeProperty('display');
        } else {
            this.elementRef.nativeElement.style.setProperty('display', 'none');
        }
    }
}
