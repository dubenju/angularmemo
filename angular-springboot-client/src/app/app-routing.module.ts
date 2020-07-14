import { CityDetailsComponent } from './city-details/city-details.component';
import { CreateCityComponent } from './create-city/create-city.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'city', pathMatch: 'full' },
  { path: 'cities', component: CityListComponent },
  { path: 'add', component: CreateCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
