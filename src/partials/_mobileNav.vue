<template>
    <div class="hero-foot is-hidden-desktop is-hidden-tablet o-mobileNav">
      <div v-if="leftNav.display == true" @click="navigateLeft" class="is-pulled-left o-mobileNav__navigationItem o-mobileNav__item has-text-left">&laquo; {{ leftNav.name }}<span class="o-background__dot">.</span></div>
      <div v-if="rightNav.display == true" @click="navigateRight" class="is-pulled-right o-mobileNav__navigationItem o-mobileNav__item has-text-right">{{ rightNav.name }}<span class="o-background__dot">.</span> &raquo;</div>
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
      if(this.$route.name === 'filter') {
        this.leftNav.display = true;
        this.leftNav.name = this.$store.state.actualProject.name;
        this.leftNav.path = '/project/' + this.$store.state.actualProject.name.replace(/\s/g, '')
        this.rightNav.display = false;
      }
    }
  };
</script>

<style>
</style>
