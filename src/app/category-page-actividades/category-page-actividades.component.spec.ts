import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageActividadesComponent } from './category-page-actividades.component';

describe('CategoryPageActividadesComponent', () => {
  let component: CategoryPageActividadesComponent;
  let fixture: ComponentFixture<CategoryPageActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPageActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPageActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
