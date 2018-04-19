<template>
<section>
  <header class="header">

  </header>
</section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Index extends Vue {
    name:string = 'Jesse James';
    photos:string[] = [
      '/static/images/UNADJUSTEDNONRAW_thumb_3a.jpg',
      '/static/images/UNADJUSTEDNONRAW_thumb_3d.jpg',
      '/static/images/UNADJUSTEDNONRAW_thumb_13.jpg',
      '/static/images/UNADJUSTEDNONRAW_thumb_35.jpg'
    ];
    // computed
    // methods
    createAnimation () { }
    mounted () {
    }
  }
</script>

<style lang="less">
  @import (reference) '../../assets/less/index.less';
  .header{
    height: @headerHeight;
    background-color: @headerBgColor;
  }
</style>
