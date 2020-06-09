<template>
  <v-app>
    <board />
  </v-app>
</template>

<script lang="ts">
import Board from './components/Board.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
    Board
  },

  data: () => ({
    //
  }),
});
</script>
