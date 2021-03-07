
import { NgModule } from '@angular/core';

import { CommonModuleModule } from "../common-module/common-module.module";
import { AnimalsRoutingModule } from './animals-routing.module';

import { AnimalsServiceService } from "./animals-service.service"

import { AnimalsComponent } from "./animals/animals.component";
import { UploadAnimalComponent } from './upload-animal/upload-animal.component';

@NgModule({
    declarations: [
        AnimalsComponent,
       
    ],
    entryComponents:[
        UploadAnimalComponent
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
