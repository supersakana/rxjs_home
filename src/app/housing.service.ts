import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private housingLocations$ = new BehaviorSubject<HousingLocation[]>([])
  private url = 'http://localhost:3000/locations';

  public async init() {
    const data = await fetch(this.url)
    const locations = await data.json() ?? []
    this.housingLocations$.next(locations)
  }

  public getHousingLocations(): Observable<HousingLocation[]> {
    return this.housingLocations$
  }

  public getHousingLocationById2(id: number) {
    return this.housingLocations$.pipe(
      map((locations) => { 
        return locations.find((location) => location.id === id)
      })
    )
  }

  constructor() { 
    this.init()
  }

  // --------------------------------------------------------------------


  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: number) {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}