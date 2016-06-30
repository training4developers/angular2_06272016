import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

interface Widget {
  id: number;
  name: string;
  description: string;
  color: string;
  size: string;
  quantity: number;
  active: boolean;
  created: Date;
  modified: Date;
}

@Injectable()
export class WidgetsData {

  requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers({ 'Content-Type': 'application/json'})
  });

  constructor(
    private http: Http
  ) {

  }

  getAll(): Observable<Widget[]> {
    return this.http.get('/api/widgets').map(res => res.json());
  }

  // getAll(): Promise<Widget[]> {
  //   return this.http.get('/api/widgets').toPromise().then(res => res.json());
  // }

  get(id: number): Observable<Widget> {
    return this.http.get('/api/widgets/' + encodeURIComponent(id.toString())).map(res => res.json());
  }

  insert(widget: Widget): Observable<Widget> {
    return this.http.post('/api/widgets',JSON.stringify(widget),this.requestOptions)
      .map(res => res.json());
  }  

  replace(widget: Widget): Observable<Widget> {
    return this.http.put('/api/widgets/' + encodeURIComponent(widget.id.toString()),
      JSON.stringify(widget),this.requestOptions).map(res => res.json());
  }

  delete(widgetId: number): Observable<Widget> {
    return this.http['delete']('/api/widgets/' + encodeURIComponent(widgetId.toString()))
      .map(res => res.json());
  }  

}

@Component({
  selector: 'widgets-app',
  //template: `{{num | async}}`,
  template: `<ul><li *ngFor="let widget of widgets">{{widget.name}}</li></ul>`,
  providers: [ WidgetsData ]
})
export class AppComponent implements OnInit {

  widgets: Widget[];
  num: Observable<number>;

  constructor(
    private widgetsData: WidgetsData
  ) { }

  ngOnInit() {
    
    //this.widgetsData.getAll().then(widgets => this.widgets = widgets);

    //this.widgetsData.getAll().subscribe(widgets => this.widgets = widgets);

    const widget: Widget = <Widget>{
      name: 'Joe Widget',
      description: 'Joe is the scrum master and business analyst',
      color: 'blue',
      size: 'tall',
      quantity: 1,
      active: true
    };

    this.widgetsData.insert(widget).subscribe(widget => console.log(widget));

    this.widgetsData.delete(6).subscribe(widget => console.log(widget));




    // const clickMeButton = document.querySelector('#click-me');

    // const clickMeObservable: Observable<{}> = Observable.fromEvent(clickMeButton, 'click').pluck('target');


    // this.num = Observable.create(observer => {

    //   let t = 0;

    //   setInterval(function() {
    //     observer.next(t++);
    //   },500);

    // });


    // const clickMeObservable: Observable<{}> = Observable.create(observer => {

    //   clickMeButton.addEventListener('click', e => {
    //     observer.next(e);  // resolve
    //   });

    // });

    // clickMeObservable.subscribe((event) => {
    //   console.dir(event);
    //   console.log('I was clicked!');
    // });


    // function createObservable(observerFn) {

    //   const fns = [];

    //   const observer = {
    //     next: function(data) {
    //       fns.forEach(function(fn) {
    //         fn(data);
    //       });
    //     }
    //   };

    //   observerFn(observer);

    //   return {
    //     subscribe: function(callbackFn) {
    //       fns.push(callbackFn);
    //     }
    //   };

    // }    

    // const clickMeObservable = createObservable(observer => {

    //   clickMeButton.addEventListener('click', e => {
    //     observer.next(e);  // resolve
    //   });

    // });

    // clickMeObservable.subscribe((event) => {
    //    console.dir(event);
    //    console.log('I was clicked!!!!!');
    // });    

    // const numObservable: Observable<number> = Observable.range(1, 30).map(n => n * 2);

    // numObservable.subscribe(num => console.log(num));



  }

}