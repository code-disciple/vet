import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { IPatient, Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  

  myVar : any;
  public  getPatients() : void {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    
    this.httpClient.get("http://localhost:5591/api/Patient").subscribe(data => {
      this.myVar = data;
    });
  }
  
  public insertPatient(patient: IPatient) : void {
    // this.httpClient.get("http://localhost:5591/api/Patient").subscribe(data => {
    //   this.myVar = data;
    // });
    
    // http options
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.httpClient.post<IPatient>("http://localhost:5591/api/patient", patient, httpOptions)
    .subscribe(response => { 
     });

  }
}
