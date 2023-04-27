import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TabSectionComponent } from 'app/views/dashboard/components/tab-section/tab-section.component';

import { SharedModule } from 'app/shared/index.module';
import { TooltipComponent } from 'app/shared/tooltip/tooltip.component';
import { CardComponent } from './card/card.component';
import { PopupComponent } from './ui-popup/ui-popup.component';




@NgModule({
    declarations: [TabSectionComponent, TooltipComponent, CardComponent, PopupComponent],
    imports: [
        CommonModule, BrowserModule, SharedModule
    ],
    exports: [TabSectionComponent, TooltipComponent, CardComponent, PopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    bootstrap: []
})
export class IndexModule { }
