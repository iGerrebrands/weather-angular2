import {Component, Input} from 'angular2/core';
import {WeatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather-item',
    templateUrl: './dev/weather/weather-item.view.html',
    styleUrls: ['src/css/weather-item.css'],
})

export class WeatherItemComponent {

    @Input() weatherItem: WeatherItem;
    clicked: boolean = false;

    constructor(private weatherService: WeatherService){}

    onClick() {
        this.clicked = !this.clicked;
    }

    onRemove() {
        this.weatherService.deleteItem(this.weatherItem);
    }
}