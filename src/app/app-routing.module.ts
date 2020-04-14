import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { HomeComponent } from './components/home/home.component';
import { StarShptsComponent } from './components/star-shpts/star-shpts.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personnel',
    component: PersonnelComponent
  },
  {
    path: 'star-ships',
    component: StarShptsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
