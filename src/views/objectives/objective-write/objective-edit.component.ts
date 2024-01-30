import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';
import { Objective } from '../../../models/objective';
import { ObjectiveWriteComponent } from './objective-write.component';

@Component({
  selector: 'app-objective-edit',
  templateUrl: './objective-write.component.html',
  styleUrl: './objective-write.component.css'
})
export class ObjectiveEditComponent extends ObjectiveWriteComponent {

  private _objective: Objective;

  constructor(protected override readonly router: Router, private readonly apiConnector: ApiConnector) {
    super(router);
  }

  ngOnInit(): void {
    // TODO: Get title from localized resources
    this.title$ = of('Edit objective');
  }

  protected override onSubmit(objective: Objective): Observable<Objective> {
    return this.apiConnector.editObjective(objective);
  }

  @Input()
  set objective(value: Objective) {
    if (this._objective !== value) {
      this._objective = value;
      this.initFormGroup(value);
    }
  }

  get objective(): Objective {
    return this._objective;
  }

}
