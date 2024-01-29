import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Objective } from '../../../models/Objective';

@Component({
    template: '',
})
export abstract class ObjectiveWriteComponent {

    protected title$: Observable<string>;
    protected formGroup$: Observable<FormGroup>;

    constructor(protected readonly router: Router) { }

    submit(objective: Objective): void {
        this.onSubmit(objective).pipe(take(1), tap(() => this.router.navigate(['/objectives']))).subscribe();
    }

    protected abstract onSubmit(objective: Objective): Observable<Objective>;

}
