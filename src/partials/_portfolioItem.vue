<template>
  <div class="c-portfolioItem scrollTarget" v-bind:style="{backgroundColor: bgColor}">
    <div class="container s-is-fullheight">
      <div class="columns">
        <div class="column">
          <h4 class="c-portfolioItem__year font--bold margin__bottom--10"><small>{{ month }}</small> {{ year }}<span class="c-portfolioItem__dot">.</span></h4>
        </div>
      </div>
      <div class="columns s-is-fullheight">
        <div class="column is-5 c-portfolioItem__column">
          <div class="c-portfolioItem__content margin__bottom--240">
            <h6 class="c-portfolioItem__job font--light">{{ job }}<span class="c-portfolioItem__dot">.</span></h6>
            <h2 class="c-portfolioItem__project font--bold margin__bottom--10">{{ project }}<span class="c-portfolioItem__dot">.</span></h2>
            <p class="c-portfolioItem__teaserText font--light margin__bottom--10">
              {{ teaserText }}
            </p>
            <p @click="toggleDetailView" class="c-portfolioItem__readMore font--bold">
              View project <span>&raquo;</span>
            </p>
            <!--
            <div>
              <img class="test" src="../assets/Code.svg" />
              <img src="../assets/Dribble@3x.svg" />
              <img src="../assets/Github@3x.svg" />
            </div>
            -->
          </div>
        </div>
        <div class="column is-7 c-portfolioItem__column">
          <img class="c-portfolioItem__content c-porfolioItem__image margin__bottom--220" v-lazy="image" :data-srcset="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // imageString: require('../assets/' + this.image)
      }
    },
    props: {
      image: {
        // type: String,
        required: true
      },
      month: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      bgColor: {
        type: String,
        required: true
      },
      project: {
        type: String,
        required: true
      },
      job: {
        type: String,
        required: true
      },
      teaserText: {
        type: String,
        required: true
      }
    },
    methods: {
      toggleDetailView () {
        this.$router.push({
          path: '/project/' + this.project.replace(/\s/g, '')
        });
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
