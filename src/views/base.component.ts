import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
    private readonly destroySubject = new Subject();

    readonly destroy$ = this.destroySubject.asObservable();

    ngOnDestroy(): void {
        this.destroySubject.next(undefined);
    }

}