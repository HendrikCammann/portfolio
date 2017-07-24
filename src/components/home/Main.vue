<template>
  <div class="absolute-div">
    <section class="hero is-fullheight o-background">
      <app-background :title="pageTitle" :subtitle="pageSubTitle" :needMarginBottom="false"></app-background>
      <app-social></app-social>
      <app-nav></app-nav>
    </section>
  </div>
</template>

<script>
  import _background from '../../partials/_background.vue'
  import _social from '../../partials/_social.vue'
  import _mobileNav from '../../partials/_mobileNav.vue'
  export default {
    data() {
      return {
        pageTitle: 'hendrik',
        pageSubTitle: 'digital design and conception'
      };
    },
    components: {
      appBackground: _background,
      appSocial: _social,
      appNav: _mobileNav
    },
  };
</script>

<style>
</style>
