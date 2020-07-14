import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl = '/api/v1/cities';

  constructor(private http: HttpClient) { }

  getCity(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCity(City: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, City);
  }

  updateCity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
