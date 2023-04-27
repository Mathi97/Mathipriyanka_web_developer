import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.scss']
})
export class TabSectionComponent {
  @Input() public weekDays: Array<any> = [];
  @Input() public selectedDate: string = '';
  @Input() public languages: Array<any> = [];
  @Input() public selectedLang: string = '';
  @Input() public height: string = '';
  @Input() public date: boolean = false;

  @Output() public handleSelectedDateEvent = new EventEmitter<any>();
  @Output() public handleSelectLangEvent = new EventEmitter<any>();

  public handleTab = (tabData: any) => this.handleSelectedDateEvent.emit(tabData);

  public selectLang = (lang: string) => this.handleSelectLangEvent.emit(lang);
}
