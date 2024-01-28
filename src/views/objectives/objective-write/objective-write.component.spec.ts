import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveWriteComponent } from './objective-write.component';

describe('ObjectiveWriteComponent', () => {
  let component: ObjectiveWriteComponent;
  let fixture: ComponentFixture<ObjectiveWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveWriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
