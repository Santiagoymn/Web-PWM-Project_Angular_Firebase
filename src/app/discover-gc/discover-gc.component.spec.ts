import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverGCComponent } from './discover-gc.component';

describe('DiscoverGCComponent', () => {
  let component: DiscoverGCComponent;
  let fixture: ComponentFixture<DiscoverGCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverGCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
