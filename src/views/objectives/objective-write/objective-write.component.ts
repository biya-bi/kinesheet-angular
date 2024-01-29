import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Objective } from '../../../models/Objective';
import { ApiConnector } from '../../../connectors/api.connector';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objective-write',
  templateUrl: './objective-write.component.html',
  styleUrl: './objective-write.component.css'
})
export class ObjectiveWriteComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private readonly apiConnector: ApiConnector, private readonly router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl()
    });
  }

  submit(): void {
    this.apiConnector.addObjective(this.formGroup.value).pipe(take(1), tap(() => this.router.navigate(['/objectives']))).subscribe();
  }

}
