import { Component, Input } from '@angular/core';
import { ApiConnector } from '../../../connectors/api.connector';
import { Observable } from 'rxjs';
import { Objective } from '../../../models/Objective';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrl: './objective-list.component.css'
})
export class ObjectiveListComponent {

  @Input() objectives: Objective[];

}
