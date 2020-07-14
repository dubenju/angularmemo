import { City } from './../city';
import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service';
import { CityListComponent } from '../city-list/city-list.component';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  @Input() city: City;

  constructor(private cityService: CityService, private listComponent: CityListComponent) { }

/*
  ngOnInit(): void {
  }
*/
  ngOnInit() {
  }


  deleteCity(id: number) {
    this.cityService.deleteCity(id)
      .subscribe(
        data => {
          console.log(data);
          // this.reloadData();
        },
        error => console.log(error));
  }
}
