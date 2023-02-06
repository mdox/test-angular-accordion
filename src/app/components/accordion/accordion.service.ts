import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AccordionService {
    private isShow$ = new BehaviorSubject<boolean>(false);
    public isShow = this.isShow$.asObservable();

    setIsShow(value: boolean) {
        this.isShow$.next(value);
    }

    getIsShow() {
        return this.isShow$.getValue();
    }
}
