import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.view.html',
    directives: [WeatherListComponent]
})

export class AppComponent {


}