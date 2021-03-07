import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: "animals",
    loadChildren: () => import('./animals/animals.module').then(mod => mod.AnimalsModule),
  },
     {
        path: "worker",
        loadChildren: () => import("./workers/workers.module").then((mod) => mod.WorkersModule)
    },
  {
    redirectTo:"animals",
    path:"",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
