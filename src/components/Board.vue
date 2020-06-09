<template>
    <v-container>
        <v-row>
            <v-col
                :md="6"
            >
                <v-card>
                    <form-create />
                </v-card>
            </v-col>
            <v-col
                :md="6"
            >
                <v-card>
                    <table-records />
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script lang="ts">
import FormCreate from './FormCreate.vue';
import TableRecords from './TableRecords.vue';

import Vue from 'vue'
export default Vue.extend({
    components: {
        FormCreate,
        TableRecords
    }
})
</script>
