export interface IPatient {
    PatientId : number;
    Name : string;
    Description: string;
    Diagnosis: string;
    DateAdmitted: Date;
    DateReleased: Date;
}

export class Patient implements IPatient {
    PatientId : number;
    Name : string;
    Description: string;
    Diagnosis: string;
    DateAdmitted: Date;
    DateReleased: Date;
}


