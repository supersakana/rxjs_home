import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { Observable, switchMap, map } from 'rxjs';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  locationService = inject(LocationService);
  housingLocation: Location | undefined;

  location$: Observable<Location | null | undefined>

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    this.location$ = this.route.paramMap.pipe(
      switchMap((params) =>
      this.locationService.getLocations().pipe(
        map((locations) => 
          locations ? 
          locations.find((location) => `${location.id}` === params.get('id')) :
          null
        )
      )
      )
    )
    this.locationService.init()
  }

  submitApplication() {
    this.locationService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
