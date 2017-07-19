<template>
  <div id="app">
    <transition :name="animation">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeItem: 2,
      lastActiveItem: 2,
      animation: 'slide-left'
    }
  },
  methods: {
    checkActualPage () {
      switch(this.$route.name) {
        case 'home':
          this.activeItem = 2;
          break;
        case 'portfolio':
          this.activeItem = 3;
          break;
        case 'about':
          this.activeItem = 1;
          break;
        case 'detail':
          this.activeItem = 4;
          break;
      }
      if (this.lastActiveItem < this.activeItem) {
        this.animation = 'slide-left'
      } else if (this.lastActiveItem > this.activeItem) {
        this.animation = 'slide-right'
      }
      this.lastActiveItem = this.activeItem
    }
  },
  created () {
    this.checkActualPage()
  },
  beforeUpdate () {
    this.checkActualPage()
  },
  components: {
  },
};
</script>

<style lang="sass">
@import 'sass/00_vendor/bulma.css'
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700')
@import url('https://fonts.googleapis.com/css?family=Pacifico')
@import 'sass/01_settings/colors.sass'
@import 'sass/01_settings/fonts.sass'
@import 'sass/01_settings/dimensions.sass'
@import 'sass/01_settings/queries.sass'
@import 'sass/04_elements/elements.sass'
@import 'sass/05_objects/background.sass'
@import 'sass/05_objects/social.sass'
@import 'sass/05_objects/navigation.sass'
@import 'sass/05_objects/sortbar.sass'
@import 'sass/05_objects/toolbar.sass'
@import 'sass/05_objects/footer.sass'
@import 'sass/05_objects/transitions.sass'
@import 'sass/06_components/portfolioItem.sass'
@import 'sass/06_components/about.sass'
@import 'sass/06_components/detail.sass'
</style>
