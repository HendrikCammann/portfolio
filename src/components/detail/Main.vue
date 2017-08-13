<template>
  <div class="absolute-div">
    <div v-show="showModal" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content has-text-centered">
        <img v-lazy="modalImage" :data-srcset="modalImage"/>
      </div>
      <button @click="toggleModal" class="modal-close is-large o-box__shadow"></button>
    </div>
    <section class="hero is-fullheight o-background">
      <transition :name="animation">
        <app-navigation v-show="this.$store.state.appState.showNavBar"></app-navigation>
      </transition>
      <app-background :title="item.name" :subtitle="item.job" :needMarginBottom="false"></app-background>
      <transition name="fade">
        <app-tools v-show="showTools"></app-tools>
      </transition>
      <app-nav v-show="!showModal"></app-nav>
    </section>
    <section class="c-detail__container">
      <div class="container">
        <div class="columns max-width">
            <div class="column is-9 c-detail__showcase">
              <div v-if="item.videos != null || item.videos != undefined" v-for="video in item.videos" class="c-detail__video--wrapper hide-in-print">
                <iframe :src="video + '?color=ffffff&&title=0&byline=0&portrait=0'" frameborder="0" allowfullscreen></iframe>
              </div>
              <img @click="toggleModal($event)" class="o-box__shadow margin__bottom--7" v-for="img in item.detailImages" v-lazy="img.fields.file.url" :data-srcset="img.fields.file.url"/>
            </div>
            <div class="column is-3" id="c-detail__mobile--push">
              <div class="columns is-multiline margin__top--200" id="c-detail__mobile--noMarginTop">
                <div v-if="item.extraInformations != null || item.extraInformations != undefined" class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow hide-in-print">
                  <a target="_blank" :href="item.extraInformations.url" class="c-detail__baseStyles--url font--bold">{{ item.extraInformations.name }}!</a>
                </div>
                <div class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow">
                  <p class="c-detail__baseStyles--headline font--bold">Description</p>
                  <div class="has-text-left c-detail__baseStyles--description font--light">
                    {{ item.detailText }}
                  </div>
                </div>
                <div class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow">
                  <p class="c-detail__baseStyles--headline font--bold">Tags</p>
                  <div class="has-text-centered font--light margin__top--25">
                    <span @click="searchTag($event)" v-for="tag in item.tags" class="tag c-detail__baseStyles--tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div v-if="item.teamMembers != null || item.teamMembers != undefined" class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow">
                  <p class="c-detail__baseStyles--headline font--bold">Team Members</p>
                  <div class="has-text-centered c-detail__baseStyles--members font--light">
                    <span v-for="member in item.teamMembers">
                      <a v-if="member.url != ''" target="_blank" :href="member.url">{{ member.name }}</a>
                      <span v-else>{{ member.name }}</span>
                    </span>
                  </div>
                </div>
                <div v-for="font, i in item.baseStyles.font" class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow">
                  <p class="c-detail__baseStyles--headline font--bold">Font-Family</p>
                  <img class="c-detail__font--image":src="item.fontImage[i].fields.file.url"/>
                  <p class="font--light c-detail__font--name">{{ font.family }}</p>
                </div>
                <div class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow">
                  <p class="c-detail__baseStyles--headline font--bold">Main Colors</p>
                  <div v-for="color in item.baseStyles.colors" class="testcolor" v-bind:style="{backgroundColor: color}">
                  </div>
                </div>
                <div v-if="item.downloads != null || item.downloads != undefined" class="column is-12 c-detail__baseStyles has-text-centered o-box__shadow hide-in-print">
                  <p class="c-detail__baseStyles--headline font--bold">Downloads</p>
                  <a target="_blank" v-for="item in item.downloads"class="c-detail__download--item has-text-centered font--light" :href="item.url">
                    <img class="c-detail__download--icon" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-512.png" /> <br />
                    {{ item.name }}
                  </a>
                </div>
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
  import _tools from '../../partials/_tools.vue'
  import _mobileNav from '../../partials/_mobileNav.vue'

  import $ from 'jquery'
  // import _lazy from 'lazyloadxt'
  import { eventBus } from '../../main.js'
  export default {
    data () {
      return {
        item: null,
        animation: 'slide-down',
        showTools: false,
        showModal: false,
        modalImage: null
      }
    },
    components: {
      appBackground: _background,
      appNavigation: _navigation,
      appTools: _tools,
      appNav: _mobileNav,
      appFooter: _footer
    },
    methods: {
      searchTag ($event) {
        this.$store.state.actualTag = $event.toElement.innerText
        this.$router.push({
          path: '/filter/' + $event.toElement.innerText
        });
        eventBus.$emit('navigationEvent');
      },
      toggleModal ($event) {
        console.log($event.toElement.currentSrc)
        if ($event.toElement.currentSrc) {
          this.modalImage = $event.toElement.currentSrc
        }
        this.showModal = !this.showModal
      },
      showMenuFunc () {
        this.$store.getters.showNavBar;
      },
      toggleTools () {
        if (window.scrollY > this.lastScroll) {
          if (window.scrollY < 900) {
            this.showTools = false
          } else {
            this.showTools = true
          }
        } else {
          if (window.scrollY < 500) {
            this.showTools = false
          } else {
            this.showTools = true
          }
        }
        this.lastScroll = window.scrollY
      }
    },
    created() {
      const that = this;
      window.scroll(0, 0);
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

          window.addEventListener('scroll', that.toggleTools);

          eventBus.$on('navigationEvent', () => {
            that.animation = 'slide-up';
            that.$store.getters.hideNavBar;
          });
          that.animation = 'slide-down';
          setTimeout(that.showMenuFunc, 1000);

          // console.log('hi', this.$store.state.projectsContentful[0].name)
          for(let i = 0; i < that.$store.state.projectsContentful.length; i++) {
            let tempName = that.$store.state.projectsContentful[i].name.replace(/\s/g, '');
            if(tempName === that.$route.params.itemName) {
              that.item = that.$store.state.projectsContentful[i];
              that.$store.state.actualProject = that.item;
              // this.item.detailImages = require('../../assets/SenioFlix');
            }
          }
        })
      } else {
        window.addEventListener('scroll', this.toggleTools);

        eventBus.$on('navigationEvent', () => {
          this.animation = 'slide-up';
          this.$store.getters.hideNavBar;
        });
        this.animation = 'slide-down';
        setTimeout(this.showMenuFunc, 1000);

        // console.log('hi', this.$store.state.projectsContentful[0].name)
        for(let i = 0; i < this.$store.state.projectsContentful.length; i++) {
          let tempName = this.$store.state.projectsContentful[i].name.replace(/\s/g, '');
          if(tempName === this.$route.params.itemName) {
            this.item = this.$store.state.projectsContentful[i];
            this.$store.state.actualProject = this.item;
            // this.item.detailImages = require('../../assets/SenioFlix');
          }
        }
      }
    }
  }
</script>

<style lang="sass">
  .list-enter-active, .list-leave-active
    transition: all 1s

  .list-enter, .list-leave-to
    opacity: 0
    // transform: translateX(30px)

  .slide-down-enter-active, .slide-down-leave-active
    -webkit-transition-delay: 2s
    transition-delay: 2s
    transition: 0.5s

  .slide-down-enter, .slide-down-leave-to
    transform: translate3d(0, -100%, 0)

  .slide-up-enter-active, .slide-up-leave-active
    transition: .5s

  .slide-up-enter, .slide-up-leave-to
    transform: translate3d(0, 100%, 0)

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-to
    opacity: 0

</style>
