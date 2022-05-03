import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaMessageComponent } from './agenda-message.component';

describe('AgendaMessageComponent', () => {
  let component: AgendaMessageComponent;
  let fixture: ComponentFixture<AgendaMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
