<template>
<div class="absolute-div">
  <section class="hero is-fullheight o-background scrollTarget">
    <transition :name="animation">
      <app-navigation v-show="this.$store.state.appState.showNavBar"></app-navigation>
    </transition>
    <app-background :title="pageTitle" :subtitle="pageSubTitle" :needMarginBottom="true"></app-background>
    <transition name="fade">
      <app-sortbar v-show="showSort"></app-sortbar>
    </transition>
  </section>
  <section>
    <transition-group name="list">
      <app-portfolio v-for="item in filteredItems" :key="item.name" :bgColor="item.color" :month="item.month" :image="item.teaserImage.fields.file.url" :year="item.year" :job="item.job" :project="item.name" :teaserText="item.teaserText"></app-portfolio>

      <!--<app-portfolio v-for="item in filteredItems" :key="item.name" :bgColor="item.color" :month="item.month" :image="item.image" :year="item.year" :job="item.job" :project="item.name" :teaserText="item.teaser"></app-portfolio>-->
    </transition-group>
  </section>
  <app-footer></app-footer>
</div>
</template>

<script>
  import _background from '../../partials/_background.vue'
  import _navigation from '../../partials/_navigation.vue'
  import _portfolioItem from '../../partials/_portfolioItem.vue'
  import _sortbar from '../../partials/_sortbar.vue'
  import _footer from '../../partials/_footer.vue'
  require("onepagescroll/jquery.onepage-scroll.min.js")
  import { eventBus } from '../../main.js'
  export default {
    data() {
      return {
        pageTitle: 'portfolio',
        pageSubTitle: ' ',
        animation: 'slide-down',
        showSort: false,
        lastScroll: 0,
        showItems: {
          code: true,
          conception: true,
          design: true
        }
      };
    },
    computed: {
      filteredItems() {
        return this.$store.state.projectsContentful.filter((element) => {
          if (((element.sort.code === this.showItems.code) && this.showItems.code === true) || ((element.sort.conception === this.showItems.conception) && this.showItems.conception === true) || ((element.sort.design === this.showItems.design) && this.showItems.design === true)) {
            return element
          }
        })
      }
    },
    components: {
      appBackground: _background,
      appNavigation: _navigation,
      appPortfolio: _portfolioItem,
      appSortbar: _sortbar,
      appFooter: _footer
    },
    methods: {
      showMenuFunc () {
        this.$store.getters.showNavBar;
      },
      toggleSort () {
        if (window.scrollY > this.lastScroll) {
          if (window.scrollY < 900) {
            this.showSort = false
          } else {
            this.showSort = true
          }
        } else {
          if (window.scrollY < 500) {
            this.showSort = false
          } else {
            this.showSort = true
          }
        }
        this.lastScroll = window.scrollY
      }
    },
    created () {
      const that = this
      if(this.$store.state.projectsContentful.length === 0) {
        // console.log('error')
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

          window.addEventListener('scroll', that.toggleSort);

          eventBus.$on('navigationEvent', () => {
            that.animation = 'slide-up';
            that.$store.getters.hideNavBar;
          });

          that.animation = 'slide-down';
          setTimeout(that.showMenuFunc, 1000);

          eventBus.$on('filteredPortfolio', (data) => {
            that.showItems.code = data.showCode
            that.showItems.conception = data.showConception
            that.showItems.design = data.showDesign
            // console.log(this.showItems)
          })
        })
      } else {
        window.addEventListener('scroll', this.toggleSort);

        eventBus.$on('navigationEvent', () => {
          this.animation = 'slide-up';
          this.$store.getters.hideNavBar;
        });
        this.animation = 'slide-down';
        setTimeout(this.showMenuFunc, 1000);

        eventBus.$on('filteredPortfolio', (data) => {
          this.showItems.code = data.showCode
          this.showItems.conception = data.showConception
          this.showItems.design = data.showDesign
          // console.log(this.showItems)
        })
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.toggleSort);
    }
  };
</script>

<style lang="sass">
</style>
