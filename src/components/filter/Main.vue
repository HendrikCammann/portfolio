<template>
  <div class="absolute-div">
    <section class="hero is-fullheight o-background">
      <transition :name="animation">
        <app-navigation v-show="this.$store.state.appState.showNavBar"></app-navigation>
      </transition>
      <app-background :title="$route.params.tagName" :subtitle="title" :needMarginBottom="false"></app-background>
      <app-nav></app-nav>
    </section>
    <section class="c-detail__container margin__top--100 c-filter">
      <div class="container">
        <div class="columns max-width is-multiline">
          <div class="column is-12">
            <h3 class="title is-3">Projects tagged with <span class="tag is-large font--bold">{{ $route.params.tagName }}</span></h3>
          </div>
        </div>

        <div class="columns max-width is-multiline">
          <div @click="openProject(item)" v-for="item in items" class="column is-4 c-filter__project margin__bottom--30">
            <div class="c-filter__project--name font--bold">
              {{ item.name }}
            </div>
            <img class="c-filter__project--img" v-lazy="item.teaserImage.fields.file.url" :data-srcset="item.teaserImage.fields.file.url"/>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import _navigation from '../../partials/_navigation.vue'
  import _background from '../../partials/_background.vue'
  import _mobileNav from '../../partials/_mobileNav.vue'
  import _footer from '../../partials/_footer.vue'

  import { eventBus } from '../../main.js'

  export default {
    data () {
      return {
        animation: 'slide-down',
        items: [],
        title: ""
      }
    },
    components: {
      appBackground: _background,
      appNav: _mobileNav,
      appNavigation: _navigation,
      appFooter: _footer
    },
    methods: {
      showMenuFunc () {
        this.$store.getters.showNavBar;
      },
      openProject (item) {
        console.log(item)

        this.$router.push({
          path: '/project/' + item.name.replace(/\s/g, '')
        });
        eventBus.$emit('navigationEvent');

      }
    },
    created () {
      const that = this;
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

          that.$store.state.projectsContentful = portfolioItemsContentful

          for(let i = 0; i < that.$store.state.projectsContentful.length; i++) {
            for(let j = 0; j < that.$store.state.projectsContentful[i].tags.length; j++) {
              if(that.$store.state.projectsContentful[i].tags[j] === that.$route.params.tagName) {
                that.items.push(that.$store.state.projectsContentful[i])
                break;
              }
            }
          }
          eventBus.$on('navigationEvent', () => {
            this.animation = 'slide-up';
            this.$store.getters.hideNavBar;
          });
          this.animation = 'slide-down';
          setTimeout(this.showMenuFunc, 1000);
        })
      } else {
      for(let i = 0; i < that.$store.state.projectsContentful.length; i++) {
        for(let j = 0; j < that.$store.state.projectsContentful[i].tags.length; j++) {
          if(that.$store.state.projectsContentful[i].tags[j] === that.$route.params.tagName) {
            that.items.push(that.$store.state.projectsContentful[i])
            break;
          }
        }
      }
      eventBus.$on('navigationEvent', () => {
        this.animation = 'slide-up';
        this.$store.getters.hideNavBar;
      });
      this.animation = 'slide-down';
      setTimeout(this.showMenuFunc, 1000);
    }
    }
  }
</script>

<style lang="sass" scoped>
.tag
  margin-bottom: 5px

.c-filter__project
  text-align: center

  &:hover
    cursor: pointer

.c-filter__project--name
  text-align: left
  text-transform: uppercase
  margin-bottom: 10px

.c-filter__project--img
  max-height: 200px
  margin: 0 auto

</style>
