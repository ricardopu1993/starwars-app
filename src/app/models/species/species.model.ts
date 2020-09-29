import { Deserializable } from './../deserializable.model';

export class Species implements Deserializable {
    name: string;
    classification: string;
    designation: string;
    averageHeight: string;
    skinColors: string;
    hairColors: string;
    eyeColors: string;
    averageLifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);

        this.films = input.films.map((element: string) => {
            return element.replace('http://swapi.py4e.com/api', '');
        });

        this.people = input.people.map((element: string) => {
            return element.replace('http://swapi.py4e.com/api', '');
        });

        this.url = input.url.replace('http://swapi.py4e.com/api', '');
        if (input.homeworld != null) {
            this.homeworld = input.homeworld.replace('http://swapi.py4e.com/api', '');
        }
        return this;
    }
}
