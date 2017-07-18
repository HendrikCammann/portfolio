<template>
  <div o-footer style="box-shadow: 0 -1px 0 rgba(219, 219, 219, 0.3)">
    <header class="nav">
        <div class="nav-left">
          <a class="nav-item">
            <h2 class="subtitle o-footer__linkImp">
              {{ impressum }}<span class="o-background__dot">.</span>
            </h2>
          </a>
        </div>
        <div class="nav-right">
          <a class="nav-item">
            <h2 class="subtitle o-footer__linkTest">
              {{ impressum }}<span class="o-background__dot">.</span>
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
        impressum: 'Impressum'
      }
    }
  }
</script>
