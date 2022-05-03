import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPageInformationComponent } from './activity-page-information.component';

describe('ActivityPageInformationComponent', () => {
  let component: ActivityPageInformationComponent;
  let fixture: ComponentFixture<ActivityPageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
