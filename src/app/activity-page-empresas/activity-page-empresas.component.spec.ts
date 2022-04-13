import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPageEmpresasComponent } from './activity-page-empresas.component';

describe('ActivityPageEmpresasComponent', () => {
  let component: ActivityPageEmpresasComponent;
  let fixture: ComponentFixture<ActivityPageEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPageEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
