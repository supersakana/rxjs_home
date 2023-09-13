import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../location/location.component';
import { Location } from '../location';
import { LocationService } from '../location.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LocationComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public locations$: Observable<Location[] | undefined>
  public filteredLocations$: Observable<Location[] | undefined>
  public locationService: LocationService = inject(LocationService)
  public searchForm = new FormGroup({
    query: new FormControl(''),
  })

  filterResults(text : string | null | undefined) {
    if (!text) {
      this.filteredLocations$ = this.locations$
      return
    }
    this.filteredLocations$ = this.locationService.filterLocations(text)
  }

  constructor() {
    this.locations$ = this.locationService.getLocations()
    this.filteredLocations$ = this.locations$

    this.searchForm.valueChanges.pipe(
      map((value) => { return value })
    ).subscribe((v) => this.filterResults(v.query))

    this.locationService.init()
  }
}
