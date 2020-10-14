import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { FilmsDetailComponent } from './components/films-detail/films-detail.component';
import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarShipsComponent,
    VehiclesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    PeopleDetailComponent,
    FilmsDetailComponent,
    PlanetsDetailComponent,
    SpeciesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
