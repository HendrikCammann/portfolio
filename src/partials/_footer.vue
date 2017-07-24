<template>
  <div style="box-shadow: 0 -1px 0 rgba(219, 219, 219, 0.3)" class="hide-in-print o-footer">
    <header class="nav">
        <div class="nav-left">
          <a class="nav-item">
            <h2 class="subtitle o-footer__linkImp" @click="openImpressum">
              {{ impressum }}<span class="o-background__dot">.</span>
            </h2>
          </a>
        </div>
        <div class="nav-right">
          <a class="nav-item">
            <h2 class="subtitle o-footer__linkTest">
              &copy; {{ copyright }}<span class="o-background__dot">.</span>
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
        impressum: 'imprint',
        copyright: null
      }
    },
    methods: {
      openImpressum () {
        this.$router.push({
          path: '/impressum'
        });
      }
    },
    created () {
      let tempDate = new Date()
      let tempYear = tempDate.getFullYear()
      this.copyright = ' hendrik cammann 2015-' + tempYear
    }
  }
</script>
