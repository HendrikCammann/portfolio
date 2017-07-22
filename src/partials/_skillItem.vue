<template>
  <div class="column is-4 c-skillItem__column has-text-centered">
    <div class="c-skillItem__content">
      <div class="c-skill__headline margin__bottom--30">
        <img class="c-skill__contact--img" :src="imageString"/>
        <h3 class="title is-3">{{ name }}<span class="c-portfolioItem__dot">.</span></h3>
      </div>
      <p class="c-skill__contact--text">
        <span class="font--light"> {{ text }} </span>
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
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
