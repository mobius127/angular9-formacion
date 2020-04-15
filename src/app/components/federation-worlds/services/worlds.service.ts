import { Observable } from 'rxjs/internal/Observable';
import { FederationWorldsService } from './federation-worlds.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { World } from '.';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {

  private world = new Subject<World>();

  constructor(private service: FederationWorldsService) { }

  public GetWorldFromServer(): void {
    this.service.getFederationWorldsFromServer().subscribe(
      result => this.GetDataFromServerResult(result),
      error => this.GetDataFromServerError(error),
      () => true
    );
  }

  public GetWorldObservable(): Observable<World> {
    return this.world.asObservable();
  }

  private GetDataFromServerResult(result: World[]): void {
    const first = result[0];

    this.world.next(first);
  }

  private GetDataFromServerError(error: any): void {}
}
