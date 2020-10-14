import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Planets } from '../../models/planets/planets.model';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  count: number;
  next: string;
  previous: string;
  data: Planets[];
  actualPage: string;
  actualPage2: true;
  // tslint:disable-next-line: variable-name
  select_data = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.initPlanets();
    this.random();
  }

  initPlanets() {
    this.apiService.getAllPlanets().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      console.log(this.next);
      this.previous = response.previous;
      this.data = response.results;
      console.log(this.data);
      this.select_data = this.data[0];
    });

  }

   getOtherPage(parameterPage: any) {
      var page = 'https://swapi.py4e.com/api/planets/?page='+ parameterPage;
      console.log(page);
      if(page != this.actualPage){
        console.log("entra");
          this.actualPage = page;
          this.apiService.getAllPlanets(page).subscribe(response => {
          this.count = response.count;
          this.next = response.next;
          this.previous = response.previous;
          this.data = response.results;
          this.select_data = this.data[0];
      })
      }
  }

  public select(selected: Planets){
    this.select_data = selected;
    this.random();
  }

  random(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    var color = 'linear-gradient(47deg, #'+randomColor1+' 0%, #'+randomColor2+' 26%, #'+randomColor3+' 100%)';

    $('#planet').css('background', color);

  }
}
