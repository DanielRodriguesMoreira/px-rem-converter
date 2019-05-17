import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';

import { PrimeNgModule } from './prime-ng/prime-ng.module';

/**
 * Module to shared components.
 */
@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    ClipboardModule,
    FormsModule,
    PrimeNgModule
  ],
  declarations: [],
  providers: [],
  entryComponents: []
})
export class SharedModule {
}
