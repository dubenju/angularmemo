import { CityService } from './../city.service';
import { City } from './../city';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  city: City = new City();
  submitted = false;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
  }

  newCity(): void {
    this.submitted = false;
    this.city = new City();
  }

  save() {
    this.cityService.createCity(this.city)
      .subscribe(data => console.log(data), error => console.log(error));
    this.city = new City();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
