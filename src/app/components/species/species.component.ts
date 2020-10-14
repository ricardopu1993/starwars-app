import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Species } from '../../models/species/species.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  count: number;
  next: string;
  previous: string;
  data: Species[];
  select_data = {
    name :'Human'
  };
  image_base_name: string;

  constructor(private apiService: ApiService) {
    this.image_base_name = "./assets/species/";
  }

  ngOnInit() {
    this.getAllSpecies();
  }

  public getAllSpecies() {
    this.apiService.getAllSpecies().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.data = response.results;
      this.select_data = this.data[0];
    });
  }

  public getNextSpecies() {
    if (this.next != null) {
      this.apiService.getAllSpecies(this.next).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      });
    }
  }

  public getPreviousSpecies() {
    if (this.previous != null) {
      this.apiService.getAllSpecies(this.previous).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      });
    }
  }

  public select(selected: Species) {
    this.select_data = selected;
  }

}
