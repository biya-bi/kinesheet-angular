import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, take, tap } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';
import { ObjectiveWriteComponent } from './objective-write.component';
import { Objective } from '../../../models/Objective';

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
    this.formGroup$ = of(new FormGroup({
      title: new FormControl()
    }));
  }

  protected override onSubmit(objective: Objective): Observable<Objective> {
    return this.apiConnector.addObjective(objective);
  }

}
