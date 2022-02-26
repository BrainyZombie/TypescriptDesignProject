import faker from "faker"
import { Markable } from "./CustomMap";

export class Company implements Markable{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        };
    }

    markerContent = (): string => {
        return  `Company:${this.name} ${this.catchPhrase}`;
    }
}