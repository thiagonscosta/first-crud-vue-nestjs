<template>
    <v-data-table
        :headers="headers"
        :items="people"
        :items-per-page="5"
    >
    </v-data-table>
</template>

<script lang="ts">

import Vue from 'vue'
import { Person } from '@/types';
import { personService } from '../services/person.service';

export default Vue.extend({
    data: () => ({
        people: [] as Array<Person>,
        headers: [
            { text: 'First Name', value: 'firstName'},
            { text: 'Last Name', value: 'lastName'},
            { text: 'E-mail', value: 'email'},
            { text: 'Gender', value: 'gender'},
            { text: 'Active', value: 'isActive'}
        ],
    }),

    mounted() {
        this.fillTable();
        this.updateTable();
    },

    methods: {
        fillTable() {
            personService.getAll()
            .then((res) => {
                this.people = res.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        updateTable() {
            this.$socket.$subscribe('new_person', (person: Person) => {
                this.people.unshift(person);
            })
        }
    }
})
</script>
