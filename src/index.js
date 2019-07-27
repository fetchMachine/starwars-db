import SwapiBD from './SwapiBD';

const db = new SwapiBD();
db.getPerson(1)
    .then(person => console.log(person.name));
