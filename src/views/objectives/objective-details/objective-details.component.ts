import { Component, Input } from '@angular/core';
import { Objective } from '../../../models/objective';

@Component({
  selector: 'app-objective-details',
  templateUrl: './objective-details.component.html',
  styleUrl: './objective-details.component.css'
})
export class ObjectiveDetailsComponent {

  @Input() objective: Objective;

}
