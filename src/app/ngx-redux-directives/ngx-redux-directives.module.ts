import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelectDirective } from './ngx-select.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxSelectDirective],
  exports: [NgxSelectDirective]
})
export class NgxReduxDirectivesModule { }
