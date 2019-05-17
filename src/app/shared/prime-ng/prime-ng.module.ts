import { NgModule } from '@angular/core';

import { TabViewModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';

/**
 * The primeNg module.
 */
@NgModule({
  exports: [
    TabViewModule,
    TooltipModule
  ]
})
export class PrimeNgModule {
}
