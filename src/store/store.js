import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import PortfolioItems from '../projects/items.json'

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'mlklkjoz7ftz',
  accessToken: 'd4b202cc4bcdac7907296436737f7a969ac5559c0af18799c12e2e1154dcc260',
});

let portfolioItemsContentful = [];

client.getEntries({
  // order: 'fields.publishDate'
})
.then(function (entries) {
  // log the title for all the entries that have it
  // console.log(portfolioItemsContentful)
  entries.items.forEach(function (entry) {
    if(entry.fields) {
      portfolioItemsContentful.push(entry.fields)
      // console.log(entry.fields)
    }
  })
  portfolioItemsContentful.sort(function(a, b) {
    return parseInt(a.projectNumber) - parseInt(b.projectNumber);
  });
  portfolioItemsContentful.reverse();
})


export const store = new Vuex.Store({
  state: {
    // projects: PortfolioItems.items,
    projectsContentful: portfolioItemsContentful,
    actualProject: null,
    appState: {
      showNavBar: false,
      showMobileNav: true
    }
  },
  getters: {
    hideNavBar: state => {
      state.appState.showNavBar = false;
      return state.appState.showNavBar
    },
    showNavBar: state => {
      state.appState.showNavBar = true;
      return state.appState.showNavBar
    },
    hideMobileNavBar: state => {
      state.appState.showMobileNav = false;
      return state.appState.showMobileNav
    },
    showMobileNavBar: state => {
      state.appState.showMobileNav = true;
      return state.appState.showMobileNav
    }
  }
});
