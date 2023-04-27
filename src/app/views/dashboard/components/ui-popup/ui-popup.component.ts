import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-ui-popup',
    templateUrl: 'ui-popup.component.html',
    styleUrls: ['./ui-popup.component.scss']
})

export class PopupComponent {

    @Input() small: boolean = false;
    @Input() hideClose: boolean = false;
    @Input() medium: boolean = false;
    @Input() expand: boolean = false;

    @Output() closeEvent = new EventEmitter();

    popupContent = (event: any) => {
        event.stopPropagation();
    }
    closePopup = () => {
        this.closeEvent.emit(false);
    }
}
