export class WeatherItem {

    static count: number = 0;

    public Id: number;

    constructor(public cityName: string, public desc: string, public temp: number) {
        this.Id = WeatherItem.count;
        WeatherItem.count++;
    }
    
}