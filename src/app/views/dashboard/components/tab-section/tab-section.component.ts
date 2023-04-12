import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.scss']
})
export class TabSectionComponent {
  @Input() public weekDays: Array<any> = [];
  @Input() public selectedDate: string = '';

  @Output() public handleSelectedDateEvent = new EventEmitter<any>();


  public handleTab = (tabData: any) => this.handleSelectedDateEvent.emit(tabData);
}
