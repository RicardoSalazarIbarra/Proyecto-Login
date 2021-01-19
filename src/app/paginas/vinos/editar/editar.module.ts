import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VinosFormModule } from 'src/app/shared/components/vinos-form/vinos-form.module';


@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    EditarRoutingModule,
    ReactiveFormsModule,
    VinosFormModule
  ]
})
export class EditarModule { }
