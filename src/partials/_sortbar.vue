<template>
  <div class="o-sortbar" id="sortbar">
    <transition name="fade">
      <div v-show="error" class="test" v-bind:style="{marginTop: marginTopVal + 'px'}">
        {{ errorText }}
      </div>
    </transition>
    <img @click="toggleItem($event)" title="Conception" v-bind:class="{ 'o-sortbar__icon--active': conception }" id="conception" class="o-sortbar__icon" src="../assets/conception.svg" />
    <img @click="toggleItem($event)" title="Design" v-bind:class="{ 'o-sortbar__icon--active': design }" id="design" class="o-sortbar__icon" src="../assets/design.svg" />
    <img @click="toggleItem($event)" title="Development" v-bind:class="{ 'o-sortbar__icon--active': code }" id="code" class="o-sortbar__icon" src="../assets/Coding.svg" />
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  export default {
    data () {
      return {
        code: true,
        conception: true,
        design: true,
        error: false,
        errorText: 'choose at least one category',
        marginTopVal: 63
      }
    },
    methods: {
      toggleError () {
        this.error = !this.error
      },
      toggleItem (event) {
        switch(event.target.id) {
          case 'conception':
            this.conception = !this.conception
            break;
          case 'design':
            this.design = !this.design
            break;
          case 'code':
            this.code = !this.code
            break;
        }

        if (this.code === false && this.conception === false && this.design === false) {
          switch(event.target.id) {
            case 'conception':
              this.conception = true
              this.marginTopVal = 7
              break;
            case 'design':
              this.design = true
              this.marginTopVal = 63
              break;
            case 'code':
              this.code = true
              this.marginTopVal = 120
              break;
          }
          this.toggleError()
          setTimeout(this.toggleError, 3500);
        } else {
          let data = {
            showCode: this.code,
            showConception: this.conception,
            showDesign: this.design
          };

          eventBus.$emit('filteredPortfolio', data);
        }
      }
    }
  }
</script>
<style lang="sass">
  .test
    position: absolute
    width: 160px
    font-size: 12px
    padding: 10px
    background-color: white
    margin-left: 62px
</style>
