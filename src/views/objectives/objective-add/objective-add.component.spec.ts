import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveAddComponent } from './objective-add.component';

describe('ObjectiveWriteComponent', () => {
  let component: ObjectiveAddComponent;
  let fixture: ComponentFixture<ObjectiveAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
