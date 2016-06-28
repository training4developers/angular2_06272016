import { Component, Pipe, PipeTransform } from '@angular/core';

declare var require;

@Component({
  selector: 'widgets-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {

  person: Object = {};

}

