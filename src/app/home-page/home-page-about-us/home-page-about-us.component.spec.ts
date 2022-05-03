import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAboutUsComponent } from './home-page-about-us.component';

describe('HomePageAboutUsComponent', () => {
  let component: HomePageAboutUsComponent;
  let fixture: ComponentFixture<HomePageAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
