import { Component, OnInit } from '@angular/core';

import { AnimalKind } from "../animal.model";

import { AnimalsServiceService } from '../animals-service.service';

@Component({
  selector: 'app-upload-animal',
  templateUrl: './upload-animal.component.html',
  styleUrls: ['./upload-animal.component.sass']
})
export class UploadAnimalComponent implements OnInit {

  AnimalKind: AnimalKind[] = [];
  constructor(
    private animalSrv: AnimalsServiceService
  ) { }

  ngOnInit(): void {

  }

  getAnimalKind() {
    this.animalSrv.getAnimalKind()
      .subscribe(
        (response: any) => {
          this.AnimalKind = response || [];
        },
        () => {

        });

  }

}
