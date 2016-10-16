import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [ CommonModule ],
})
export class CoreModule {   }