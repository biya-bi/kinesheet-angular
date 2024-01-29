import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ApiConnector } from '../../../connectors/api.connector';

@Component({
  selector: 'app-objective-add',
  templateUrl: './objective-add.component.html',
  styleUrl: './objective-add.component.css'
})
export class ObjectiveAddComponent implements OnInit {

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
