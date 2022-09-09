import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: SharedModule.MODULES,
  exports: SharedModule.MODULES
})
export class SharedModule {
  static readonly MODULES = [
    CommonModule,
  ];
}
