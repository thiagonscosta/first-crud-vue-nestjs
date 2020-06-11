import http from './api';
import { Person } from "@/types";

class PersonService {
    
    create (person: Person): Promise<Person> {
        return http.post('create', person)
    }

    getAll () {
        return http.get('/')
    }
}

export const personService = new PersonService();