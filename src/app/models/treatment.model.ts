export interface ITreatment {
    TreatmentId: number;
    PatientId: number;
    Date: Date;
    TreatmentAndDose: string;
}

export class Treatment implements ITreatment {
    TreatmentId: number;
    PatientId: number;
    Date: Date;
    TreatmentAndDose: string;
}
