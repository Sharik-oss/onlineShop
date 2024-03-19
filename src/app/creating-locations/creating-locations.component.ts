import { Component } from '@angular/core';
import { LocationsApiService } from '../locations-api.service';
import { TLocations } from '../../type/locations.type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-creating-locations',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupComponent],
  templateUrl: './creating-locations.component.html',
  styleUrl: './creating-locations.component.scss'
})
export class CreatingLocationsComponent {
  wifiCheckbox = "checkbox"
  laundryCheckbox = "checkbox"
  locations:TLocations[] = [];
  createdLocation:FormGroup;
  constructor(private locationService: LocationsApiService){
      this.createdLocation = new FormGroup({})
   }
  receivedLocation(event: any){
   
    this.createdLocation = event
    this.create();
    
  }

  create(){
    const locationData = this.createdLocation
    this.locationService.createLocation(locationData).subscribe((data: {}) => {
    })
  }

}
