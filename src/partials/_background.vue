<template>
    <div class="hero-body" v-bind:class="{ 'margin__bottom--90':needMarginBottom }">
      <div v-if="leftNav.display == true" @click="navigateLeft" class="is-hidden-mobile is-pulled-left o-background__navigationItem o-background__navigationItem--left">{{ leftNav.name }}<span class="o-background__dot">.</span></div>
      <div class="container has-text-centered">
        <h1 class="title o-background__headline">
          {{ title }}<span class="o-background__dot">.</span>
        </h1>
        <h2 v-if="subtitle != ' '" class="subtitle o-background__subHeadline">
          {{ subtitle }}<span class="o-background__dot">.</span>
        </h2>
      </div>
      <div v-if="rightNav.display == true" @click="navigateRight" class="is-hidden-mobile is-pulled-left o-background__navigationItem o-background__navigationItem--right">{{ rightNav.name }}<span class="o-background__dot">.</span></div>
    </div>
</template>

<script>
  import { eventBus } from '../main.js'
  export default {
    data() {
      return {
        leftNav: {
          name: 'about',
          path: '/about',
          display: true
        },
        rightNav: {
          name: 'portfolio',
          path: '/portfolio',
          display: true
        }
      };
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: false
      },
      needMarginBottom: {
        type: Boolean,
        required: true
      },
      showNavigation: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    methods: {
      navigateLeft () {
        this.$router.push({
          path: this.leftNav.path
        });
        eventBus.$emit('navigationEvent');
      },
      navigateRight () {
        this.$router.push({
          path: this.rightNav.path
        });
        eventBus.$emit('navigationEvent');
      }
    },
    created () {
      if(this.$route.name === 'about') {
        this.leftNav.display = false;
        this.rightNav.name = 'home';
        this.rightNav.path = '/';
      }
      if(this.$route.name === 'portfolio') {
        this.rightNav.display = false;
        this.leftNav.name = 'home';
        this.leftNav.path = '/';
      }
      if(this.$route.name === 'detail') {
        this.leftNav.display = true;
        this.leftNav.name = 'portfolio';
        this.leftNav.path = '/portfolio';
        this.rightNav.display = false;
      }
    }
  };
</script>

<style>
</style>
