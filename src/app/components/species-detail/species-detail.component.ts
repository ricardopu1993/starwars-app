import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Species } from '../../models/species/species.model';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {

  select_data = {
    name :'Human'
  };
  image_base_name: string;


  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.image_base_name = "./assets/species/";    
  }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.apiService.getSpecieId(params['id']).subscribe(response => {
        this.select_data = response;
      });
    });
  }

}
