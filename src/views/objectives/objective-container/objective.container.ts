import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';
import { ObjectiveDetailsComponent } from '../objective-details/objective-details.component';
import { ObjectiveListComponent } from '../objective-list/objective-list.component';
import { ObjectiveEditComponent } from '../objective-write/objective-edit.component';

@Component({
  selector: 'app-objective-container',
  templateUrl: './objective.container.html',
  styleUrl: './objective.container.css'
})
export class ObjectiveContainer {

  constructor(private readonly apiConnector: ApiConnector, private readonly router: Router) { }

  onActivate(component: any) {
    if (component instanceof ObjectiveListComponent) {
      this.apiConnector.getObjectives().pipe(take(1), tap(objectives => component.objectives = objectives)).subscribe();
    } else if (component instanceof ObjectiveDetailsComponent || component instanceof ObjectiveEditComponent) {
      this.apiConnector.getObjective(this.getObjectiveId()).pipe(take(1), tap(objective => component.objective = objective)).subscribe();
    }
  }

  private getObjectiveId() {
    const segments = this.router.url.split('/');
    return segments[segments.length - 1];
  }

}
