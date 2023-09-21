import { Injectable } from '@angular/core';
import { Location } from './location';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations$ = new BehaviorSubject<Location[]>([])
  private url = 'http://localhost:3000/locations';


  // public async init() {
  //   const data = await fetch(this.url)
  //   const locations = await data.json() ?? []
  //   this.locations$.next(locations)
  // }

  // ^^^ db.json initializer 

  public async init() {
    this.locations$.next(this.allLocations)
  }

  public getLocations(): Observable<Location[]> {
    return this.locations$
  }

  public filterLocations(text: string): Observable<Location[]> {
    return this.locations$.pipe(
      map((locations) => { 
        return locations.filter((location) => 
        location?.city.toLowerCase().includes(text.toLowerCase()))
      })
    )
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  // All data below belongs to json.db, it's in this file temporarily for deployment reasons

  private allLocations = [
    {
    "id": 0,
    "name": "Acme Fresh Start Housing",
    "city": "Chicago",
    "state": "IL",
    "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
    "availableUnits": 4,
    "wifi": true,
    "laundry": true
    },
    {
    "id": 1,
    "name": "A113 Transitional Housing",
    "city": "Santa Monica",
    "state": "CA",
    "photo": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
    "availableUnits": 0,
    "wifi": false,
    "laundry": true
    },
    {
    "id": 2,
    "name": "Warm Beds Housing Support",
    "city": "Juneau",
    "state": "AK",
    "photo": "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
    "availableUnits": 1,
    "wifi": false,
    "laundry": false
    },
    {
    "id": 3,
    "name": "Homesteady Housing",
    "city": "Chicago",
    "state": "IL",
    "photo": "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
    "availableUnits": 1,
    "wifi": true,
    "laundry": false
    },
    {
    "id": 4,
    "name": "Happy Homes Group",
    "city": "Gary",
    "state": "IN",
    "photo": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
    "availableUnits": 1,
    "wifi": true,
    "laundry": false
    },
    {
    "id": 5,
    "name": "Hopeful Apartment Group",
    "city": "Oakland",
    "state": "CA",
    "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
    "availableUnits": 2,
    "wifi": true,
    "laundry": true
    },
    {
    "id": 6,
    "name": "Seriously Safe Towns",
    "city": "Oakland",
    "state": "CA",
    "photo": "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
    "availableUnits": 5,
    "wifi": true,
    "laundry": true
    },
    {
    "id": 7,
    "name": "Hopeful Housing Solutions",
    "city": "Oakland",
    "state": "CA",
    "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg",
    "availableUnits": 2,
    "wifi": true,
    "laundry": true
    },
    {
    "id": 8,
    "name": "Seriously Safe Towns",
    "city": "Oakland",
    "state": "CA",
    "photo": "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg",
    "availableUnits": 10,
    "wifi": false,
    "laundry": false
    },
    {
    "id": 9,
    "name": "Capital Safe Towns",
    "city": "Portland",
    "state": "OR",
    "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
    "availableUnits": 6,
    "wifi": true,
    "laundry": true
    }
   ]
}