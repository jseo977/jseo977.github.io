import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCard implements OnInit {
  @Input()
  titleText: string = "";

  @Input()
  imagePath: string = "";

  @Input()
  shortDescription: string = "";

  @Input()
  longDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
