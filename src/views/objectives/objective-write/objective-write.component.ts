import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Objective } from '../../../models/objective';

@Component({
    template: '',
})
export abstract class ObjectiveWriteComponent {

    protected title$: Observable<string>;

    formGroup: FormGroup;

    constructor(protected readonly router: Router) { }

    submit(): void {
        this.onSubmit(this.formGroup.value).pipe(take(1), tap(() => this.router.navigate(['/objectives']))).subscribe();
    }

    protected abstract onSubmit(objective: Objective): Observable<Objective>;

    protected initFormGroup(objective?: Objective): void {
        this.formGroup = new FormGroup({
            id: new FormControl(objective?.id),
            title: new FormControl(objective?.title)
        });
    }

}
