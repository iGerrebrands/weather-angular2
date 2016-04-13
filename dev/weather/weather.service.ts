import {Injectable} from "angular2/core";
import {WeatherItem} from "./weather-item";
import {WEATHER_ITEMS} from "./weather.data";

@Injectable()
export class WeatherService{

    private weatherItems: WeatherItem[];

    constructor(){
        this.weatherItems = WEATHER_ITEMS;
    }

    deleteItem(item): boolean{
        var index = -1;
        this.weatherItems.forEach((_item, i) => {
            if (item.Id === _item.Id){
                index = i;
            }
        });

        if(index !== -1){
            this.weatherItems.splice(index, 1);
            return true;
        }
        return false;
    }

    public getWeatherItems(): WeatherItem[] {
        return this.weatherItems;
    }

}