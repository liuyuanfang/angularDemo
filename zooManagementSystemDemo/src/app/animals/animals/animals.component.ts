import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalsServiceService } from '../animals-service.service';

import { UploadAnimalComponent } from "../upload-animal/upload-animal.component"

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.sass']
})
export class AnimalsComponent implements OnInit {

  animalData: any[] = [];
  totalRecords: number = 0;
  constructor(
    private animalSrv: AnimalsServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  loadAnimalData(evnet) {
    this.getAnimal();
  }

  onRefresh() {
    this.getAnimal();
  }

  onSearch() {

  }

  getAnimal() {
    this.animalSrv.getAnimal().subscribe(
      (response: any) => {

        this.animalData = response || [];
      },
      () => {

      });

  }

  onUploadAnimal() {
    let dialogRef = this.dialog.open(UploadAnimalComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  onDelete() {

  }

}