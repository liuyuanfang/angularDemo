import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from "../common-module/common-module.module";
import { WorkersRoutingModule } from "./worker-routing.module";

import { WorkersService } from "./workers.service";

import { WorkersComponent } from './workers/workers.component';



@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    WorkersRoutingModule
  ],
  providers:[
    WorkersService
  ]
})
export class WorkersModule { }
