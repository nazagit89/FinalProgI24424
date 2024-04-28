import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetosAseguradosComponent } from './objetos-asegurados/objetos-asegurados.component';
import { PolizaComponent } from './poliza/poliza.component';

const routes: Routes = [
  { path: "objetos-asegurados", component: ObjetosAseguradosComponent },
  { path: "poliza", component: PolizaComponent },
  { path: "**", redirectTo: "objetos-asegurados" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
