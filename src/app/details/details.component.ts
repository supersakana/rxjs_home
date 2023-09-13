import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { Observable } from 'rxjs';


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

  location$: Observable<Location | undefined>

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.location$ = this.locationService.getLocationById(housingLocationId)
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
