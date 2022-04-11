import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageQuienesSomosComponent } from './about-us-page-quienes-somos.component';

describe('AboutUsPageQuienesSomosComponent', () => {
  let component: AboutUsPageQuienesSomosComponent;
  let fixture: ComponentFixture<AboutUsPageQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPageQuienesSomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPageQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
