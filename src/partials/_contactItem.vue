<template>
  <div class="column is-4 c-aboutItem__column">
    <div class="c-aboutItem__content margin__bottom--240">
      <div class="c-about__headline margin__bottom--30">
        <img class="c-about__contact--img" :src="imageString"/>
        <h3 class="title is-3">{{ name }}<span class="c-portfolioItem__dot">.</span></h3>
      </div>
      <p class="c-about__contact--text" v-for="option in options">
        <span class="font--light">{{ option.name }}:</span> <a v-if="option.link != null" :href="option.link" :target="option.target"><span class="font--bold">{{ option.value }}</span></a> <span v-if="option.link == null" class="font--bold">{{ option.value }}</span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imageString: require('../assets/' + this.image)
      }
    },
    props: {
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    }
  }
</script>
