import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageInformationComponent } from './about-us-page-information.component';

describe('AboutUsPageInformationComponent', () => {
  let component: AboutUsPageInformationComponent;
  let fixture: ComponentFixture<AboutUsPageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
