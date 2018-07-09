import { Injectable } from '@angular/core';
import {Doctor} from './doctor';
import {DOCTORS} from './mock-doctors';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private messageService: MessageService) { }

  getDoctors(): Observable<Doctor[]> {
    this.messageService.add("The doctors were fetched!")
    return of(DOCTORS)
  }
  getDoctor(id: number): Observable<Doctor>{
    this.messageService.add(`Fetched a doctor with id= ${id}`);
    return of(DOCTORS.find(doctor => doctor.id === id));
  }

}

