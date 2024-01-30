import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ModalResponse } from '../../../models/modal-response';

@Component({
  selector: 'app-objective-delete',
  templateUrl: './objective-delete.component.html',
  styleUrl: './objective-delete.component.css'
})
export class ObjectiveDeleteComponent {

  @ViewChild('closeButton') closeButton: ElementRef<HTMLElement>;

  @Output() response = new EventEmitter<ModalResponse>();

}
