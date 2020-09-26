import { Deserializable } from './../deserializable.model';

export class Starships implements Deserializable {
    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:string;
    length:string;
    max_atmosphering_speed:string;
    crew:string;
    passengers:string;
    cargo_capacity:string;
    consumables:string;
    hyperdrive_rating:string;
    MGLT:string;
    starship_class:string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.films = input.films.map((element: string) => {
            return element.replace('http://swapi.py4e.com/api','');
        });

        this.pilots = input.pilots.map((element: string) => {
            return element.replace('http://swapi.py4e.com/api','');
        });
        this.url = input.url.replace('http://swapi.py4e.com/api','');
        return this;
    }
}
