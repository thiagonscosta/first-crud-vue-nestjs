import http from './api';
import { Person } from "@/types";

class PersonService {
    
    create (person: Person): Promise<Person> {
        return http.post('create', person)
    }
}

export const personService = new PersonService();