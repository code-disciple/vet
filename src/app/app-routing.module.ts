import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { PatientRegistrationFormComponent } from './patient-registration-form/patient-registration-form.component';

const routes: Routes = [
  { path:  'register-patient', component:  PatientRegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
