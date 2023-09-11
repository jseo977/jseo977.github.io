import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCard } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventCard;
  let fixture: ComponentFixture<EventCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
