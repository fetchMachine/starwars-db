export default class SwapiBD {
    #url = 'https://swapi.co/api/';
    #imgUrl = 'https://starwars-visualguide.com/assets/img/';

    getData(url) {
        return fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`Could not feth ${url}, received ${resp.status}`);
                }
                return resp.json()
            })
            .catch(window.console.log.bind(window.console));
    }

    getImageUrl(type, id) {
        return `${this.#imgUrl}${type}/${id}.jpg`;
    }

    getAllPersons = () => {
        const url = `${this.#url}people`;
        return this.getData(url)
            .then(data => data.results)
            .then(persons => persons.map(this.transformPerson))
            .catch(window.console.log.bind(window.console));
    }

    getPerson = (id) => {
        const url = `${this.#url}people/${id}`;
        return this.getData(url)
            .then(this.transformPerson)
            .catch(window.console.log.bind(window.console));
    }

    getAllStarships = () => {
        const url = `${this.#url}starships`;
        return this.getData(url)
            .then(data => data.results)
            .then(starships => starships.map(this.transformStarship))
            .catch(window.console.log.bind(window.console));
    }

    getStarship = (id) => {
        const url = `${this.#url}starships/${id}`;
        return this.getData(url)
            .then(this.transformStarship)
            .catch(window.console.log.bind(window.console));
    }

    getAllPlanets = () => {
        const url = `${this.#url}planets`;
        return this.getData(url)
            .then(data => data.results)
            .then(planets => planets.map(this.transformPlanet))
            .catch(window.console.log.bind(window.console));
    }

    getPlanet = (id) => {
        const url = `${this.#url}planets/${id}`;
        return this.getData(url)
            .then(this.transformPlanet);
    }

    getRandomPlanet = () => {
        const randomID = Math.floor(Math.random() * 19) + 1;
        return this.getPlanet(randomID);
    }

    getIdFromUrl = (url) => {
        const idRegexp = /([0-9]+)/;
        return url.match(idRegexp)[1];
    }

    transformPlanet = (planet) => {
        const id = this.getIdFromUrl(planet.url);
        const imgUrl = this.getImageUrl('planets', id);

        return {
          id,
          imgUrl,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        }
    }

    transformPerson = (person) => {
        const id = this.getIdFromUrl(person.url);
        const imgUrl = this.getImageUrl('characters', id);

        return {
            id,
            imgUrl,
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
        }
    }

    transformStarship = (starship) => {
        const id = this.getIdFromUrl(starship.url);
        const imgUrl = this.getImageUrl('starships', id);

        return {
            id,
            imgUrl,
            name: starship.name,
            model: starship.model,
            costInCredits: starship.cost_in_credits,
            cargoCapacity: starship.cargo_capacity,
         }
    }
}
