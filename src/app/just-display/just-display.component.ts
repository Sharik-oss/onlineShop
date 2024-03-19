import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TLocations } from '../../type/locations.type';
import { LocationsApiService } from '../locations-api.service';
import { Subscription, timeInterval } from 'rxjs';

@Component({
  selector: 'app-just-display',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './just-display.component.html',
  styleUrl: './just-display.component.scss'
})
export class JustDisplayComponent implements OnInit {
  locations: TLocations[] = []
  locationSubscription!: Subscription
  constructor(private locationService: LocationsApiService){}

  ngOnInit(): void {
   this.locationSubscription= this.locationService.getLocations().subscribe(data => {
      console.log(data);
      this.locations  = data
    })
    setTimeout(() => {
      this.ngOnDestroy()
    }, 1000)
      
  }

  ngOnDestroy(){
    this.locationSubscription.unsubscribe()
    
  }
  
}
