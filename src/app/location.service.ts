import { Injectable } from '@angular/core';
import { Location } from './location';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations$ = new BehaviorSubject<Location[]>([])
  private url = 'http://localhost:3000/locations';

  public async init() {
    const data = await fetch(this.url)
    const locations = await data.json() ?? []
    this.locations$.next(locations)
  }

  public getLocations(): Observable<Location[]> {
    return this.locations$
  }

  public getLocationById(id: number): Observable<Location | undefined> {
    return this.locations$.pipe(
      map((locations) => { 
        return locations.find((location) => location.id === id)
      })
    )
  }

  public filterLocations(text: string): Observable<Location[]> {
    return this.locations$.pipe(
      map((locations) => { 
        return locations.filter((location) => location?.city.toLowerCase().includes(text.toLowerCase()))
      })
    )
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}