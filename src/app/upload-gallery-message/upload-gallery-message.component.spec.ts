import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGalleryMessageComponent } from './upload-gallery-message.component';

describe('UploadGalleryMessageComponent', () => {
  let component: UploadGalleryMessageComponent;
  let fixture: ComponentFixture<UploadGalleryMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGalleryMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGalleryMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
