import { VinosFormComponent } from './vinos-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VinosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VinosFormComponent]
})
export class VinosFormModule { }