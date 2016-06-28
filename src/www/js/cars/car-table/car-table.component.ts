import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../shared/car';
import { CarData } from '../shared/car-data.service';

@Component({
	selector: 'car-table',
	template: `<table>
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
	<button type="button" (click)="createCar()">Create Car</button>`
})
export class CarTableComponent implements OnInit {

	private cars: Car[];

	constructor(
		private router: Router,
		private carData: CarData
	) { }

	ngOnInit() {
		this.cars = this.carData.getAll();
	}

	createCar() {
		this.router.navigate(['/create']);
	}
 
}