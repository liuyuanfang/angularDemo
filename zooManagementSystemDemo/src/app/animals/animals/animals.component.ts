import { Component, OnInit } from '@angular/core';
import { AnimalsServiceService } from '../animals-service.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.sass']
})
export class AnimalsComponent implements OnInit {

  animalData: any[] = [];
  totalRecords: number = 0;
  constructor(
    private animalSrv: AnimalsServiceService
  ) { }

  ngOnInit(): void {
    console.log("zheshishenem............");
    this.getAnimal();
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

  }

  onDelete() {

  }

}