import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../shared/car';
import { CarData } from '../shared/car-data.service'; 

@Component({
	selector: 'car-form',
	template: `<form novalidate>

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
export class CarFormComponent {

	newCar: Object = {};

	constructor(private router: Router, private carData: CarData) { }

	addCar() {
		this.carData.insert(<Car>this.newCar);
		this.router.navigate(['/']);
	}

}