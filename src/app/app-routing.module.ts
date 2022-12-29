import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarReporteComponent } from './generar-reporte/generar-reporte.component';
import { GenerarComponent } from './generar/generar.component';

const routes: Routes = [
  {path: '', redirectTo: 'reporte', pathMatch: 'full'},
  {
    path: 'reporte',
    component: GenerarReporteComponent
  },
  {
    path: 'generar',
    component: GenerarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
