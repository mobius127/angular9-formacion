import { Component, OnInit } from '@angular/core';
import { World, WorldsService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-world-form',
  templateUrl: './world-form.component.html',
  styleUrls: ['./world-form.component.scss'],
  // providers: [WorldsService]
})
export class WorldFormComponent implements OnInit {

  world: World;

  worldSubscription: Subscription;

  constructor(private service: WorldsService) { }

  ngOnInit(): void {
    this.worldSubscription = this.service.GetWorldObservable().subscribe(result => {
      this.world = result;
    });
  }

}
