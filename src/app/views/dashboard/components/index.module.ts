import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { TabSectionComponent } from 'app/views/dashboard/components/tab-section/tab-section.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { SharedModule } from 'app/shared/index.module';
import { TooltipComponent } from 'app/shared/tooltip/tooltip.component';
import { CardComponent } from './card/card.component';
import { PopupComponent } from './ui-popup/ui-popup.component';




@NgModule({
    declarations: [MovieCardsComponent, TabSectionComponent, TooltipComponent, CardComponent, PopupComponent],
    imports: [
        CommonModule, NgbModule, BrowserModule,
        NgbCarouselModule, NgIf, MdbCheckboxModule,
        SharedModule
    ],
    exports: [MovieCardsComponent, TabSectionComponent, TooltipComponent, CardComponent, PopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    bootstrap: [MovieCardsComponent]
})
export class IndexModule { }
