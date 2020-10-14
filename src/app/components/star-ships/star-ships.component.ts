import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Starships } from '../../models/startships/starships.model';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.scss']
})
export class StarShipsComponent implements OnInit {
  count: number;
  next: string;
  previous: string;
  data: Starships[];
  select_data = {
    name :'CR90 corvette'
  };
  image_base_name: string;


  constructor(private apiService: ApiService) {
    this.image_base_name = "./assets/starships/";
  }

  ngOnInit() {
    this.getAllStarships();
  }

  public getAllStarships() {
    this.apiService.getAllStarships().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.data = response.results;
      this.select_data = this.data[0];
    });
  }


}
