import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '../location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input() location!: Location;

}
