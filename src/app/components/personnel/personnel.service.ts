import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiUrl = 'https://angularapiformacion.azurewebsites.net/api/personnels';

  constructor(private http: HttpClient) { }

  newPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona).pipe(map(response => response));
  }

  getPersonasFromServer(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl).pipe(map(response => response));
  }
}
