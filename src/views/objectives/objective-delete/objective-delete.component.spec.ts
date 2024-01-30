import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveDeleteComponent } from './objective-delete.component';

describe('ObjectiveDeleteComponent', () => {
  let component: ObjectiveDeleteComponent;
  let fixture: ComponentFixture<ObjectiveDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
