import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class CarData {

	private cars: Car[] = [
		{ make: 'Ford', model: 'Fusion', year: 2015, color: 'red' },
    { make: 'Toyota', model: 'Yaris', year: 2014, color: 'blue' },
    { make: 'Nissan', model: 'Versa', year: 2014, color: 'orange' }
	];

	getAll(): Car[] {
		return this.cars;
	}

	insert(car: Car): Car {
		this.cars.push(car);
		return car;
	}

}