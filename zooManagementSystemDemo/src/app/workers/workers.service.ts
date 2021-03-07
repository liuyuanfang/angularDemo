import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  workerUrl:string = "/zoo/worker"
  constructor(
    private http:HttpClient
  ) {

   }

  getAllWorkers(){

    return this.http.get(this.workerUrl).pipe();

  }


}
