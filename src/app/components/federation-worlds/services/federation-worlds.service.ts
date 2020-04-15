
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { World } from './world';


@Injectable({
  providedIn: 'root'
})
export class FederationWorldsService {

  private apiUrl = 'https://angularapiformacion.azurewebsites.net/api/worlds';

  constructor(private http: HttpClient) { }

  getFederationWorldsFromServer(): Observable<World[]> {
    return this.http.get<World[]>(this.apiUrl).pipe(map(response => response));
  }

  newFederationPlanet(planet: World): Observable<World> {
    return this.http.post<World>(this.apiUrl, planet).pipe(map(response => response));
  }
}
