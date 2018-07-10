import { Injectable } from '@angular/core';
import {Doctor} from './doctor';
// import {DOCTORS} from './mock-doctors';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private messageService: MessageService,
  private http: HttpClient,
  private doctorsUrl = 'api/doctors'  // URL to web api
 ) { }

    /** GET doctors from the server */
    getDoctors (): Observable<Doctor[]> {
      return this.http.get<Doctors[]>(this.doctorsUrl)
        .pipe(
          tap(doctors => this.log(`fetched doctors`)),
          catchError(this.handleError('getDoctors', []))
        );
    }

    /** GET doctor by id. Return `undefined` when id not found */
    getDoctorNo404<Data>(id: number): Observable<Doctor> {
      const url = `${this.doctorsUrl}/?id=${id}`;
      return this.http.get<Doctor[]>(url)
        .pipe(
          map(doctors => doctors[0]), // returns a {0|1} element array
          tap(d => {
            const outcome = d ? `fetched` : `did not find`;
            this.log(`${outcome} doctor id=${id}`);
          }),
          catchError(this.handleError<Doctor>(`getDoctor id=${id}`))
        );

  }
  /** GET doctor by id. Will 404 if id not found */
getDoctor(id: number): Observable<Doctor> {
  const url = `${this.doctorsUrl}/${id}`;
  return this.http.get<Doctor>(url).pipe(
    tap(_ => this.log(`fetched doctor id=${id}`)),
    catchError(this.handleError<Doctor>(`getDoctor id=${id}`))
  );
}
}
