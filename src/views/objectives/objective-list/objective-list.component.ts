import { Component, Input } from '@angular/core';
import { Objective } from '../../../models/objective';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrl: './objective-list.component.css'
})
export class ObjectiveListComponent {

  @Input() objectives: Objective[];

}
