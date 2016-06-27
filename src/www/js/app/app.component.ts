import { Component, OnInit } from '@angular/core';

import { Car } from '../cars/shared/car';

@Component({
  selector: 'widgets-app',
  template: `<h1>{{message}}</h1>
  <input type="text" [(ngModel)]="message">
  <form>
    <label>
      Color Filter:
      <input type="text" [(ngModel)]="colorFilter" name="colorFilter">
    </label>
  </form>
  <ul>
    <li *ngFor="let color of sortedColors">{{color}}</li>
  </ul>
  <form novalidate>
    <label>New Color: <input type="text"
      [(ngModel)]="newColor" name="newColor"></label>
    <button type="button" (click)="addColor()">Add Color</button>
  </form>
  <ul>
    <li *ngFor="let country of countries">
      {{country.code}} - {{country.name}}
    </li>
  </ul>
  <table>
    <thead>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let car of cars">
        <td>{{car.make}}</td>
        <td>{{car.model}}</td>
        <td>{{car.year}}</td>
        <td>{{car.color}}</td>
      </tr>
    </tbody>
  </table>
  <form novalidate>

    <div>
      <label>
        Car Make:
        <input type="text" [(ngModel)]="newCar.make" name="newCarMake">
      </label>
    </div>

    <div>
      <label>
        Car Model:
        <input type="text" [(ngModel)]="newCar.model" name="newCarModel">
      </label>
    </div>

    <div>
      <label>
        Car Year:
        <input type="text" [(ngModel)]="newCar.year" name="newCarYear">
      </label>
    </div>
    
    <div>
      <label>
        Car Color:
        <input type="text" [(ngModel)]="newCar.color" name="newCarColor">
      </label>
    </div>

    <button type="button" (click)="addCar()">Add Car</button>

  </form>`
})
export class AppComponent implements OnInit {

  colors: string[] = ['red','white','blue','green'];
  newColor: string;
  colorFilter: string = '';

  lastColorList = null;
  colorFilterCache = {};

  get sortedColors(): string[] {

    if (this.lastColorList !== this.colors) {
      this.lastColorList = this.colors.sort();
      this.colorFilterCache = {};

      console.log('running sort');
    }

    if (this.colorFilterCache[this.colorFilter]) {
      console.log('using cached list');
      return this.colorFilterCache[this.colorFilter];
    }

    console.log('running filter');
    return this.colorFilterCache[this.colorFilter] = this.colors.filter(color =>
      this.colorFilter.length === 0 || color.startsWith(this.colorFilter));
  }

  // something.sort((a,b) => a.year > b.year ? 0 : 1);


  countries: Object[] = [
    { code: 'US', name: 'United States of America' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'IN', name: 'India' },
    { code: 'GC', name: 'Greece' },
    { code: 'CA', name: 'Canada' }
  ];

  message: string = 'Hello World!!!!';

  cars: Car[] = [
    { make: 'Ford', model: 'Fusion', year: 2015, color: 'red' },
    { make: 'Toyota', model: 'Yaris', year: 2014, color: 'blue' },
    { make: 'Nissan', model: 'Versa', year: 2014, color: 'orange' }
  ]

  addColor(): void {
    this.colors = this.colors.concat(this.newColor);
    this.newColor = '';
  }

  newCar: Object = { };

  ngOnInit() {
    this.initNewCar();
  }

  initNewCar() {
    this.newCar = {
      make: '',
      model: '',
      year: (new Date()).getFullYear(),
      color: ''
    };
  }

  addCar(): void {
    this.cars.push(<Car>this.newCar);
    this.initNewCar();
  }

}
