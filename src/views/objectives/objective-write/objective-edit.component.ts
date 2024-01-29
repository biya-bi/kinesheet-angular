import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, switchMap, take } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';
import { Objective } from '../../../models/Objective';
import { ObjectiveWriteComponent } from './objective-write.component';

@Component({
  selector: 'app-objective-edit',
  templateUrl: './objective-write.component.html',
  styleUrl: './objective-write.component.css'
})
export class ObjectiveEditComponent extends ObjectiveWriteComponent {

  constructor(protected override readonly router: Router,
    private readonly apiConnector: ApiConnector,
    private readonly route: ActivatedRoute) {
    super(router);
    
  }

  ngOnInit(): void {
    // TODO: Get title from localized resources
    this.title$ = of('Edit objective');
    this.formGroup$ = this.route.params.pipe(
      switchMap((params) => this.apiConnector.getObjective(params['id'])),
      map(objective => {
        return new FormGroup({
          id: new FormControl(objective.id),
          title: new FormControl(objective.title)
        });
      }));
  }

  protected override onSubmit(objective: Objective): Observable<Objective> {
    return this.apiConnector.editObjective(objective);
  }

}
