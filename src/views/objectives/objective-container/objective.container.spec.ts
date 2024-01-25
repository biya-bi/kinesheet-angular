import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveContainer } from './objective.container';

describe('ObjectiveContainer', () => {
  let component: ObjectiveContainer;
  let fixture: ComponentFixture<ObjectiveContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
