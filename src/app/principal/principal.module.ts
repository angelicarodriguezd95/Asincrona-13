import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AsincronaComponent } from './asincrona/asincrona.component';




@NgModule({
  declarations: [
    AsincronaComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [

    AsincronaComponent
  ]
})
export class PrincipalModule { }
