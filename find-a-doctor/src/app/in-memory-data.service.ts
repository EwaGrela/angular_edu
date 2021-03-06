import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const doctors = [
        {id: 1, name: 'Anna Kowalska', specialty: 'internist'},
        {id: 2, name: 'Alicja Kowalska', specialty: 'neurologist'},
        {id: 3, name: 'Amelia Kowalska', specialty: 'dermatologist'},
        {id: 4, name: 'Tomasz Kowalski', specialty: 'surgeon'},
        {id: 5, name: 'Tommy Wiseau', specialty: 'pediatrics'},
        {id: 6, name: 'Greg Sestero', specialty: 'cardiologist'},
        {id: 7, name: 'Danny Haldiman', specialty: 'internist'},
        {id: 8, name: 'Lisa Simpson', specialty: 'coroner'},
        {id: 9, name: 'Homer Simpson', specialty: 'nuclear medicine'},
        {id: 10, name: 'Marge Simpson', specialty: 'neurosurgeon'},
        {id: 11, name: 'Bart Simpson', specialty: 'ophtalmologist'}
    ];
    return {doctors};
  }
}