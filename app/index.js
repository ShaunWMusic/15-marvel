import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.app',

  data() {
    return {
      results: null,
    };
  },

  mounted() {
    fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=d95eb5768c013b90d3d198d41e5c0502')
        .then((r) => r.json())
        .then((data) => {
          this.title = data.results;

          this.choosePokemon(data.results);
        });
  },

  methods: {
    choosePokemon(pokemon) {
      this.loading = true;
      fetch(pokemon.url)
      .then((r) => r.json())
      .then((data) => {
        this.loading = false;
        this.currentSelection = data;
      });
    },
  },
});
