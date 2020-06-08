export interface IVaccine {
    vaccineId: number;
    patientId: number;
    type: string;
    dose1TargetDate: Date;
    dose2TargetDate: Date;
    dose3TargetDate: any;
    dose1DeliveredDate: any;
    dose2DeliveredDate: any;
    dose3DeliveredDate: any;
    dose1Delivered: boolean;
    dose1Required: boolean;
    dose2Delivered: boolean;
    dose2Required: boolean;
    dose3Delivered: boolean;
    dose3Required: boolean;
}

export class Vaccine implements IVaccine {
    vaccineId: number;
    patientId: number;
    type: string;
    dose1TargetDate: Date;
    dose2TargetDate: Date;
    dose3TargetDate: any;
    dose1DeliveredDate: any;
    dose2DeliveredDate: any;
    dose3DeliveredDate: any;
    dose1Delivered: boolean;
    dose1Required: boolean;
    dose2Delivered: boolean;
    dose2Required: boolean;
    dose3Delivered: boolean;
    dose3Required: boolean;
}
