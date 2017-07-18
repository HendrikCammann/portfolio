<template>
  <div class="absolute-div">
    <section class="hero is-fullheight o-background">
      <transition :name="animation">
        <app-navigation v-show="this.$store.state.appState.showNavBar"></app-navigation>
      </transition>
      <app-background :title="pageTitle" :subtitle="pageSubTitle" :needMarginBottom="true"></app-background>
    </section>
    <section>
      <div class="c-aboutItem">
        <div class="container s-is-fullheight">
          <div class="columns s-is-fullheight">
            <div class="colum is-5 c-aboutItem__column">
              <div class="c-aboutItem__content margin__bottom--240">
                <h2 class="c-aboutItem__welcome font--bold margin__bottom--10">i am Hendrik<span class="c-aboutItem__dot">.</span></h2>
                <p class="c-aboutItem__text font--light margin__bottom--10">
                  a digital designer and developer based in Augsburg
                </p>
              </div>
            </div>
            <div class="column is-7 c-aboutItem__column">
              <!-- <img class="c-aboutItem__content c-aboutItem__image" :src="require('../../assets/pers.jpg')" /> -->
            </div>
          </div>
        </div>
      </div>

      <div class="c-aboutItem--light">
        <div class="container s-is-fullheight">
          <div class="columns">
            <div class="column">
              <h4 class="c-portfolioItem__year font--bold margin__bottom--10">Skills<span class="c-portfolioItem__dot">.</span></h4>
            </div>
          </div>
          <div class="columns s-is-fullheight">
            <div class="column is-12 c-aboutItem__column has-text-centered">
            </div>
          </div>
        </div>
      </div>

      <div class="c-aboutItem">
        <div class="container s-is-fullheight">
          <div class="columns">
            <div class="column">
              <h4 class="c-portfolioItem__year font--bold margin__bottom--10">Clients<span class="c-portfolioItem__dot">.</span></h4>
            </div>
          </div>
          <div class="columns s-is-fullheight">
            <div class="column is-12 c-aboutItem__column has-text-centered">
            </div>
          </div>
        </div>
      </div>

      <div class="c-aboutItem--light">
        <div class="container s-is-fullheight">
          <div class="columns">
            <div class="column">
              <h4 class="c-portfolioItem__year font--bold margin__bottom--10">Contact<span class="c-portfolioItem__dot">.</span></h4>
            </div>
          </div>
          <div class="columns s-is-fullheight">
            <div class="column is-12 c-aboutItem__column has-text-centered">
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import _background from '../../partials/_background.vue'
  import _navigation from '../../partials/_navigation.vue'
  import _footer from '../../partials/_footer.vue'
  import { eventBus } from '../../main.js'

  export default {
    data() {
      return {
        pageTitle: 'about',
        pageSubTitle: ' ',
        showMenu: false,
        animation: 'slide-down'
      };
    },
    components: {
      appBackground: _background,
      appNavigation: _navigation,
      appFooter: _footer
    },
    methods: {
      showMenuFunc () {
        this.$store.getters.showNavBar;
      }
    },
    created () {
      eventBus.$on('navigationEvent', () => {
        // console.log('heardIT')
        this.animation = 'slide-up';
        this.$store.getters.hideNavBar;
        // console.log(this.animation);
        // console.log(this.showMenu);
      });
      this.animation = 'slide-down';
      setTimeout(this.showMenuFunc, 1000);
    }
  };
</script>

<style lang="sass">
  .o-skill__image
    margin: 0 auto
</style>
