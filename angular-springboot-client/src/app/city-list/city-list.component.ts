import { Observable } from "rxjs";
import { CityService } from "./../city.service";
import { City } from "./../city";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

   cities: Observable<City[]>;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cities = this.cityService.getCityList();
  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
