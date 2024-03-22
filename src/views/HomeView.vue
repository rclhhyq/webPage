<template>
  <div class="home">
    <starRotateVue></starRotateVue>
    <frostedScreenVue></frostedScreenVue>
    <slideShowVue></slideShowVue>
    <parallaxScrollVue></parallaxScrollVue>
    <svgScrollVue></svgScrollVue>
  </div>
</template>

<script>
// @ is an alias to /src
import starRotateVue from '@/components/starRotate.vue'
import frostedScreenVue from '@/components/frostedScreen.vue'
import slideShowVue from '@/components/slideShow.vue'
import parallaxScrollVue from '@/components/parallaxScroll.vue'
import svgScrollVue from '@/components/svgScroll.vue'
export default {
  name: 'homeView',
  components: {
    starRotateVue,
    frostedScreenVue,
    slideShowVue,
    parallaxScrollVue,
    svgScrollVue
  }
}
</script>
