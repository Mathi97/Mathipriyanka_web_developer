import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketingInfoComponent } from './dashboard.component';

describe('TicketingInfoComponent', () => {
  let component: TicketingInfoComponent;
  let fixture: ComponentFixture<TicketingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketingInfoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TicketingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
