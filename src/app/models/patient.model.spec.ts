import { Patient } from './patient.model';

describe('Patient.Model', () => {
  it('should create an instance', () => {
    expect(new Patient()).toBeTruthy();
  });
});
