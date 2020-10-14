import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { People } from '../../models/people/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  count: number;
  next: string;
  previous: string;
  data: People[];
  // tslint:disable-next-line: variable-name
  select_data = {
    name :'Luke Skywalker'
  };
  // tslint:disable-next-line: variable-name
  image_base_name: string;


  constructor(private apiService: ApiService) {
    this.image_base_name = './assets/people/';
  }

  ngOnInit() {
    this.getAllPeople()
  }

  public getAllPeople() {
    this.apiService.getAllPeople().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.data = response.results;
      this.select_data = this.data[0];
    });
  }

  public getNextPeople() {
    if (this.next != null) {
      this.apiService.getAllPeople(this.next).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      })
    }
  }

  public getPreviousPeople() {
    if (this.previous != null) {
      this.apiService.getAllPeople(this.previous).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      })
    }
  }

  public select(selected: People){
    this.select_data = selected;
  }

  public changeImage(event){
    (document.getElementById('show_image') as HTMLImageElement).src = event.target.src; 
  }


}
