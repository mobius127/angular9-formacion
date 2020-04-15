import { WorldsService } from './../services/worlds.service';
import { Component, OnInit } from '@angular/core';
import { World, FederationWorldsService } from '../services';

@Component({
  selector: 'app-world-list',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.scss'],
  // providers: [FederationWorldsService, WorldsService]
})
export class WorldListComponent implements OnInit {

  worldsList: World[];

  constructor(private service: FederationWorldsService, private worldService: WorldsService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.service.getFederationWorldsFromServer().subscribe(response => this.worldsList = response);
  }

  clickWorld(evt: any) {
    this.worldService.GetWorldFromServer();
  }

}
