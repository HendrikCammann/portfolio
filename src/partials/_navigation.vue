<template>
  <div class="hero-head o-navigation">
    <header class="nav">
        <div class="nav-left">
          <a @click="goHome" class="nav-item">
            <h2 class="subtitle o-navigation__linkHome">
              {{ logoName }}<span class="o-background__dot">.</span>
            </h2>
          </a>
        </div>
    </header>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        logoName: 'hendrik'
      }
    },
    methods: {
      goHome () {
        this.$router.push({
          path: '/'
        });
        eventBus.$emit('navigationEvent');
      },
    }
  }
</script>
