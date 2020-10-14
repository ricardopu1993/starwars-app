import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Films } from 'src/app/models/films/films.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  count: number;
  next: string;
  previous: string;
  films: Films[];
  select_data = {
    title :'A New Hope'
  };
  image_base_name: string;

  constructor(private apiService: ApiService) {
    this.image_base_name = "./assets/films/";
  }

  ngOnInit() {
    this.getfilms();
  }

  public getfilms(){
    this.apiService.getAllFilms().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.films = response.results;
      this.select_data = this.films[0];
    });
  }

  public changeItem(selected: Films, event){
    this.select_data = selected;
    (document.getElementById('show_image') as HTMLImageElement).src = event.target.src; 
  }

}
