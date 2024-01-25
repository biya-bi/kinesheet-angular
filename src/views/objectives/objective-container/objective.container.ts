import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Objective } from '../../../models/Objective';
import { ApiConnector } from '../../../connectors/api.connector';

@Component({
  selector: 'app-objective-container',
  templateUrl: './objective.container.html',
  styleUrl: './objective.container.css'
})
export class ObjectiveContainer {

  objectives$: Observable<Objective[]>;

  constructor(private readonly apiConnector: ApiConnector) {
    this.objectives$ = this.apiConnector.getObjectives();
  }

}
