import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';
import { Objective } from '../../../models/Objective';
import { ObjectiveWriteComponent } from './objective-write.component';

@Component({
  selector: 'app-objective-add',
  templateUrl: './objective-write.component.html',
  styleUrl: './objective-write.component.css'
})
export class ObjectiveAddComponent extends ObjectiveWriteComponent implements OnInit {

  constructor(protected override readonly router: Router, private readonly apiConnector: ApiConnector) {
    super(router);
  }

  ngOnInit(): void {
    // TODO: Get title from localized resources
    this.title$ = of('Add an objective');
    this.initFormGroup();
  }

  protected override onSubmit(objective: Objective): Observable<Objective> {
    return this.apiConnector.addObjective(objective);
  }

}
