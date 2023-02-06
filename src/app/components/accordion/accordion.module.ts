import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import {
    AccordionHideButtonDirective,
    AccordionShowButtonDirective
} from './accordion.directive';

@NgModule({
    declarations: [
        AccordionComponent,
        AccordionShowButtonDirective,
        AccordionHideButtonDirective,
    ],
    imports: [CommonModule],
    exports: [
        AccordionComponent,
        AccordionShowButtonDirective,
        AccordionHideButtonDirective,
    ],
})
export class AccordionModule {}
