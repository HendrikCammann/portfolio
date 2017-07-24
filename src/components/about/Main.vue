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
              <div class="c-aboutItem__content margin__bottom--240" id="welcome">
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
          <div class="columns s-is-fullheight is-multiline">
            <app-skill-item v-for="item in skillItems" :key="item.name" :image="item.img" :name="item.name" :text="item.text"></app-skill-item>
            <div class="column is-12">
                daskdsjakdjaskdajds
            </div>
          </div>
        </div>
      </div>

      <div class="c-aboutItem">
        <div class="container s-is-fullheight">
          <div class="columns">
            <div class="column">
              <h4 class="c-portfolioItem__year font--bold margin__bottom--10">Contact<span class="c-portfolioItem__dot">.</span></h4>
            </div>
          </div>
          <div class="columns s-is-fullheight">
            <app-contact-item v-for="item in contactItems" :key="item.name" :image="item.img" :name="item.name" :options="item.options"></app-contact-item>
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
  import _contactItem from '../../partials/_contactItem.vue'
  import _skillItem from '../../partials/_skillItem.vue'
  import { eventBus } from '../../main.js'

  export default {
    data() {
      return {
        pageTitle: 'about',
        pageSubTitle: ' ',
        showMenu: false,
        animation: 'slide-down',
        contactItems: [
          {
            name: 'Phone',
            img: 'Phone.svg',
            options: [
              {
                name: 'mobile',
                value: '1234 4567 890',
                link: null
              },
              {
                name: 'skype',
                value: 'cablol',
                link: ''
              }
            ]
          },
          {
            name: 'Social Media',
            img: 'Social.svg',
            options: [
              {
                name: 'facebook',
                value: 'Hendrik Cammann',
                target: '_blank',
                link: 'https://www.facebook.com/hendrik.cammann'
              },
              {
                name: 'xing',
                value: 'Hendrik Cammann',
                target: '_blank',
                link: 'https://www.xing.com/profile/Hendrik_Cammann'
              },
              {
                name: 'linkedin',
                value: 'Hendrik Cammann',
                target: '_blank',
                link: 'https://www.linkedin.com/in/hendrik-cammann-18744511a/'
              }
            ]
          },
          {
            name: 'Mail',
            img: 'Mail_white.svg',
            options: [
              {
                name: 'business',
                value: 'mail@hendrikcammann.de',
                target: '_self',
                link: 'mailto:mail@hendrikcammann.de?subject=contact%20request'

              },
              {
                name: 'university',
                value: 'hendrik.cammann@hs-augsburg.de',
                target: '_self',
                link: 'mailto:hendrik.cammann@hs-augsburg.de?subject=contact%20request'
              }
            ]
          }
        ],
        skillItems: [
          {
            name: 'Conception',
            img: 'conception_white.svg',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          },
          {
            name: 'Webdesign',
            img: 'design_white.svg',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          },
          {
            name: 'Development',
            img: 'Code_white.svg',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        ]
      };
    },
    components: {
      appBackground: _background,
      appNavigation: _navigation,
      appContactItem: _contactItem,
      appSkillItem: _skillItem,
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
