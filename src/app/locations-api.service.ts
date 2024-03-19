import { Injectable } from '@angular/core';
import { TLocations } from '../type/locations.type';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsApiService {
  i = 0;
  locations:TLocations[] = [];
  constructor(private http: HttpClient){}
  getLocations() {
    return this.http.get<TLocations[]>('http://localhost:3000/locations')
  }

  createLocation(locationData: FormGroup): Observable<TLocations> {
    return this.http.post<TLocations>('http://localhost:3000/locations', locationData)
  }
}
