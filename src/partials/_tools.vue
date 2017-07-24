<template>
  <div class="o-toolbar is-hidden-mobile" id="toolbar">
    <img @click="toggleItem($event)" title="Print" id="print" class="o-toolbar__icon" src="../assets/print.svg" />
    <a v-if="showShare" :href="facebookShare" target="_blank"><img @click="toggleItem($event)" title="Share on facebook" id="fb" class="o-toolbar__icon" src="../assets/Facebook.svg" /></a>
    <a v-if="showShare" :href="twitterShare" target="_blank"><img @click="toggleItem($event)" title="Share on twitter" id="twitter" class="o-toolbar__icon" src="../assets/Twitter.svg" /></a>
    <a v-if="showShare" :href="pinterestShare" target="_blank"><img @click="toggleItem($event)" title="Share on pinterest" id="pinterest" class="o-toolbar__icon" src="../assets/Pinterest.svg" /></a>
    <img @click="toggleItem($event)" title="Share" id="share" v-bind:class="{'o-toolbar__icon--active': showShare}" class="o-toolbar__icon" src="../assets/share.svg" />
    <a :href="'mailto:?subject=' + emailText + '&amp;body=' + emailBody">
      <img @click="toggleItem($event)" title="Mail" id="mail" class="o-toolbar__icon" src="../assets/Mail.svg" />
    </a>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  export default {
    data () {
      return {
        emailText: 'Hey check out the ' + this.$route.params.itemName + ' project by Hendrik Cammann',
        emailBody: 'Hey! Check out this project ',
        // emailLink: null,
        facebookShare: null,
        twitterShare: null,
        pinterestShare: null,
        showShare: false
      }
    },
    methods: {
      toggleItem (event) {
        switch(event.target.id) {
          case 'print':
            window.print()
          case 'share':
            this.showShare = !this.showShare
            console.log(window.location.href)
            // window.open('http://twitter.com/share?url='+encodeURIComponent(this.emailLink)+'&text='+encodeURIComponent('ji'), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
          case 'mail':
            break;
          case 'fb':
            this.showShare = false;
            break;
          case 'twitter':
            this.showShare = false;
            break;
          case 'pinterest':
            this.showShare = false;
            break;
        }
      }
    },
    created () {
      // this.emailLink = 'http://www.dev.hendrikcammann.de/testPf/#' + this.$route.fullPath;
      this.facebookShare = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(window.location.href) +'&amp;caption=' + this.emailBody
      this.pinterestShare = 'http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&amp;media=' + this.$store.state.actualProject.teaserImage.fields.file.url + '&amp;description=' + 'Check out the ' + this.$store.state.actualProject.name + ' project by Hendrik Cammann'
      this.twitterShare = 'https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + '&amp;text=' + encodeURIComponent('Check out this project by @hendrikcammann') + '&amp;hashtags=' + encodeURIComponent('hendrikcammann')
      let tempLink = ' by Hendrik Cammann'
      this.emailBody += window.location.href + tempLink
    }
  }
</script>
<style lang="sass">
  #fb, #twitter, #pinterest
    position: absolute
    left: 58px

  #twitter
    left: 116px

  #pinterest
    left: 174px
</style>
