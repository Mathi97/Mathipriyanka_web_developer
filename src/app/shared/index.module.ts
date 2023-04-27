import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveUnderscorePipe } from './underscore.pipe';
@NgModule({
    declarations: [
        RemoveUnderscorePipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [RemoveUnderscorePipe]
})
export class SharedModule { }
