import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { FilmsDetailComponent } from './components/films-detail/films-detail.component';
import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home' , component:  HomeComponent },
  { path: 'films' , component: FilmsComponent },
  { path: 'films/:id' , component: FilmsDetailComponent },
  { path: 'people' , component: PeopleComponent },
  { path: 'people/:id' , component: PeopleDetailComponent },
  { path: 'planets' , component: PlanetsComponent},
  { path: 'planets/:id' , component: PlanetsDetailComponent},
  { path: 'species' , component: SpeciesComponent },
  { path: 'species/:id' , component: SpeciesDetailComponent },
  { path: 'starShips' , component: StarShipsComponent},
  { path: 'vehicles' , component: VehiclesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }