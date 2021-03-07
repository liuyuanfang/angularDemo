import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalsServiceService {

  zooAnimalUrl:string = "http://localhost:8080/zoo/animals"
  constructor(
  private http:HttpClient
  ) { }
  
  getAnimal(){
  return this.http.get(this.zooAnimalUrl);
  }
  
  getAnimalDetailById(id:string){
  this.http.get(`${this.zooAnimalUrl}?id=${id}`);
  }
  
  addAnimal(){
  this.http.get(this.zooAnimalUrl);
  }
  
  deleteAnimal(id:string){
  this.http.delete(`${this.zooAnimalUrl}/${id}`);
  }
}



