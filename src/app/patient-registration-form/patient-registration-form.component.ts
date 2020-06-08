import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { IPatient, Patient } from '../models/patient.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-patient-registration-form',
  templateUrl: './patient-registration-form.component.html',
  styleUrls: ['./patient-registration-form.component.css']
})
export class PatientRegistrationFormComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    
  }

  patient: IPatient;
  isDesexed: boolean = false;
  patientAge : number;
  patientName:  string  =  "";
  patientColour: string = "";
  patientBreed: string = "";
  cause: string = "";
  callerName: string = "";
  callerPhone: string = "";
  staffName: string = "";
  email:  string  =  "";
  job:  string  =  "";
  address:  string  =  "";
  selectedSource:  string  =  "email";
  selectedGender:  string  =  "male";
  isCompany  :  boolean  =  false;
  createdAt  =  new  FormControl(new  Date());


  public  registerPatient() {
  
    this.patient = new Patient();
    this.patient.Name = this.patientName;
    this.patient.DateAdmitted = new Date();
    this.patient.Description = "Colour: " + this.patientColour + "  Breed: " + this.patientBreed;
        
        //  this.patientService.getPatients();

    this.patientService.insertPatient(this.patient);
  }

}
