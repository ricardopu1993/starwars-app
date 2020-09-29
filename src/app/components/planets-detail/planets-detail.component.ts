import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss']
})
export class PlanetsDetailComponent implements OnInit {

  select_data = {
    name :'Tatooine'
  };
  image_base_name: string;


  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.image_base_name = "./assets/planets/";
    
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.apiService.getPlanetId(params['id']).subscribe(response => {
        this.select_data = response;
      });
    });
  }

}
