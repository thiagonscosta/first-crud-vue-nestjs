import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000/person'
})

// export async function create (person: Person): Promise<Person> {
//     const response = await http.post('create', JSON.stringify(person))
//     return response.data;
// }