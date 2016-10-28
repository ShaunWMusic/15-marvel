import 'whatwg-fetch';
import Vue from 'vue/dist/vue';
const apiKey = 'd95eb5768c013b90d3d198d41e5c0502';

const app = new Vue({
  el: '.full-page',

  data() {
    return {
      series: null,
    };
  },

  mounted() {
    this.searchSeries('Spider');
  },

  methods: {
    searchSeries(input) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${input}&apikey=${apiKey}`)
          .then((r) => r.json())
          .then((data) => {
            this.series = data.data.results[0];
          });
    },
  },
});
