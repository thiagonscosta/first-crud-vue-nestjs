<template>
    <div>
        <v-form 
            @submit.prevent="submitData"
            ref="form"
        >
            <v-container class="px-10">
                <v-text-field
                    v-model="person.firstName"
                    label="First name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="person.lastName"
                    label="Last name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="person.email"
                    label="E-mail"
                    required
                ></v-text-field>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="240px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="person.birthday"
                            label="Birthday date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        ref="picker"
                        v-model="person.birthday"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                    ></v-date-picker>
                </v-menu>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-radio-group
                                v-model="person.gender"
                            >
                                <v-radio
                                    v-for="(g, i) in genders"
                                    :key="i"
                                    :label="g.value"
                                    :value="g.value"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col>
                            <v-switch
                                v-model="person.isActive"
                                label="Active"
                            ></v-switch>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="text-center">
                    <v-btn type="submit" large color="primary">Submit</v-btn>
                </div>
            </v-container>
        </v-form>
    </div>
</template>

<script lang="ts">
import { Person } from '@/types';
import { personService } from '../services/person.service';

import Vue from 'vue'
export default Vue.extend({

    data: () => ({
        person: {} as Person,
        genders: [
            {value: 'Female'},
            {value: 'Male'},
            {value: 'Non-binary'}
        ],
        menu: false, 
        
    }),

    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs['picker'] as any).activePicker = 'YEAR')
      },
    },

    methods: {
        save (): void {
            (this.$refs['menu'] as any).save(this.person.birthday)
        },

        submitData (): void {
            personService.create(this.person)
                .then(() => {
                    (this.$refs['form'] as any).reset();
                })
                .catch(err => { console.log(err)});
        }
    }
})
</script>