import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarRoutingModule } from './agregar-routing.module';
import { AgregarComponent } from './agregar.component';
import { VinosFormModule } from 'src/app/shared/components/vinos-form/vinos-form.module';


@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    VinosFormModule
  ]
})
export class AgregarModule { }
