import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { StarShip } from './starship';


@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  private apiUrl = 'https://angularapiformacion.azurewebsites.net/api/StarShips';

  constructor(private http: HttpClient) { }

  getStarShipsFromServer(): Observable<StarShip[]> {
    return this.http.get<StarShip[]>(this.apiUrl).pipe(map(response => response));
  }

  newStarShip(starship: StarShip): Observable<StarShip> {
    return this.http.post<StarShip>(this.apiUrl, starship).pipe(map(response => response));
  }
}
