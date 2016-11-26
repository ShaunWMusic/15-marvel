import 'whatwg-fetch';
import Vue from 'vue/dist/vue';
const apiKey = 'd95eb5768c013b90d3d198d41e5c0502';

const app = new Vue({
  el: '.full-page',

  data() {
    return {
      series: null,
      characters: null,
      comics: [],
      modalDescription: false,
      searchTerm: '',
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    showDescription(description) {
      this.modalDescription = description;
    },

    hideModal() {
      this.modalDescription = null;
    },

    searchSeries(input) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${input}&apikey=${apiKey}`)
          .then((r) => r.json())
          .then((data) => {
            this.series = data.data.results[0];
            this.searchCharacters(this.series);
            this.searchComics(this.series);
          });
    },

    searchCharacters(series) {
      fetch(`http://gateway.marvel.com/v1/public/series/${series.id}/characters?apikey=${apiKey}`)
          .then((r) => r.json())
          .then((data) => {
            this.characters = data.data.results;
          });
    },

    searchComics(series) {
      fetch(`http://gateway.marvel.com/v1/public/series/${series.id}/comics?apikey=${apiKey}`)
          .then((r) => r.json())
          .then((data) => {
            this.comics = data.data.results;
          });
    },

  },
});
