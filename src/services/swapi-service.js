export default class SwapiBD {
    #url = 'https://swapi.co/api/';

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

    getAllPersons() {
        const url = `${this.#url}people`;
        return this.getData(url);  
    }

    getPerson(id) {
        const url = `${this.#url}people/${id}`;
        return this.getData(url); 
    }

    getAllStarships() {
        const url = `${this.#url}starships`;
        return this.getData(url);  
    }

    getStarship(id) {
        const url = `${this.#url}starships/${id}`;
        return this.getData(url); 
    }

    getAllPlanets() {
        const url = `${this.#url}planets`;
        return this.getData(url);  
    }

    getPlanet(id) {
        const url = `${this.#url}planets/${id}`;
        return this.getData(url); 
    }
}
