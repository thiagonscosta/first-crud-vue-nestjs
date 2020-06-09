<template>
    <v-data-table
        :headers="headers"
        :items="persons"
        :items-per-page="5"
    >
    </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        headers: [
            { text: 'First Name', value: 'firstName'},
            { text: 'Last Name', value: 'lastName'},
            { text: 'E-mail', value: 'email'},
            { text: 'Gender', value: 'gender'},
            { text: 'Active', value: 'active'}
        ],
        persons: [
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
            {
                firstName: 'Teste', lastName: 'Teste', email: 'teste@email.com', gender: 'teste', active: false
            },
        ]
    })
})
</script>