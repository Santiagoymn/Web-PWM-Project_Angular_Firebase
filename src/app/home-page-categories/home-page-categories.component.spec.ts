import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCategoriesComponent } from './home-page-categories.component';

describe('HomePageCategoriesComponent', () => {
  let component: HomePageCategoriesComponent;
  let fixture: ComponentFixture<HomePageCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
