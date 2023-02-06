import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
    selector: 'accordion, [accordion]',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    providers: [AccordionService],
})
export class AccordionComponent implements OnInit, OnChanges {
    @Input()
    isShow = false;

    constructor(private accordionService: AccordionService) {}

    ngOnInit() {
        if (this.isShow !== this.accordionService.getIsShow()) {
            this.accordionService.setIsShow(this.isShow);
        }

        this.accordionService.isShow.subscribe(
            (value) => (this.isShow = value)
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        const changeIsShow = changes['isShow'];

        if(changeIsShow.currentValue !== changeIsShow.currentValue) {
            this.isShow = changeIsShow.currentValue;
            this.accordionService.setIsShow(changeIsShow.currentValue);
        }
    }
}
