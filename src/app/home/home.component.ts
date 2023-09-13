import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public locations$: Observable<HousingLocation[] | undefined>
  public filteredLocations$: Observable<HousingLocation[] | undefined>
  public housingService: HousingService = inject(HousingService)

  filterResults(text: string) {
    if (!text) {
      this.filteredLocations$ = this.locations$
      this.filteredLocations$.subscribe(val => console.log(val))
      return
    }
    this.filteredLocations$ = this.housingService.filterHousingLocation(text)
  }

  constructor() {
    this.locations$ = this.housingService.getHousingLocations()
    this.filteredLocations$ = this.locations$

    this.housingService.init()
  }
}
