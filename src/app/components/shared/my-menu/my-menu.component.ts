import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss']
})
export class MyMenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(private routerService: Router) { }

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-fw pi-plus', command: () => this.goToHome() },
      { label: 'Personal', icon: 'pi pi-fw pi-plus', command: () => this.goToPersonnel() },
      { label: 'Naves', icon: 'pi pi-fw pi-plus', command: () => this.goToStarShips() },
      { label: 'Mundos', icon: 'pi pi-fw pi-plus', command: () => this.goToWorlds() }
    ];
  }

  goToWorlds(): void {
    this.routerService.navigate(['/worlds']);
  }

  goToStarShips(): void {
    this.routerService.navigate(['/star-ships']);
  }

  goToHome(): void {
    this.routerService.navigate(['/home']);
  }

  goToPersonnel(): void {
    this.routerService.navigate(['/personnel']);
  }

}
