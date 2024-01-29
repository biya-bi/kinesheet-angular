import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';

@Component({
  selector: 'app-objective-details',
  templateUrl: './objective-details.component.html',
  styleUrl: './objective-details.component.css'
})
export class ObjectiveDetailsComponent {

  readonly objective$ = this.route.params.pipe(switchMap((params) => this.apiConnector.getObjective(params['id'])));

  constructor(private readonly apiConnector: ApiConnector, private readonly route: ActivatedRoute, private readonly router: Router) { }

}
