
import { NgModule } from '@angular/core';

import { CommonModuleModule } from "../common-module/common-module.module";
import { AnimalsRoutingModule } from './animals-routing.module';

import { AnimalsServiceService } from "./animals-service.service"

import { AnimalsComponent } from "./animals/animals.component";

@NgModule({
    declarations: [
        AnimalsComponent
    ],
    imports: [
        CommonModuleModule,
        AnimalsRoutingModule
    ],
    providers: [
        AnimalsServiceService
    ],
    bootstrap: [

    ]
})
export class AnimalsModule { }
