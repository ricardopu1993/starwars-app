import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { People } from '../../models/people/people.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  select_data = {
    name :'Luke Skywalker'
  };
  image_base_name: string;


  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.image_base_name = "./assets/people/";
    
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.apiService.getPeopleId(params['id']).subscribe(response => {
        this.select_data = response;
      });
    });
  }

  public changeImage(event){
    (document.getElementById('show_image') as HTMLImageElement).src = event.target.src; 
  }

}
