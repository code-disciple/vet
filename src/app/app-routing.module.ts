import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientCardComponent } from './patient-card/patient-card.component';

const routes: Routes = [
  { path:  'patient', component:  PatientCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
