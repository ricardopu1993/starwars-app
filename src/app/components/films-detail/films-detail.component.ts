import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Films } from 'src/app/models/films/films.model';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {

  select_data = {
    title :'A New Hope'
  };
  image_base_name: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.image_base_name = "./assets/films/";
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.apiService.getFilmId(params['id']).subscribe(response => {
        this.select_data = response;
      });
    });
  }

  

  public changeItem(selected: Films, event){
    this.select_data = selected;
    (document.getElementById('show_image') as HTMLImageElement).src = event.target.src; 
  }

}
