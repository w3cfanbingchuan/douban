<template>
  <div id="app">
    <Dheader></Dheader>
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import Dheader from "./components/header";
export default {
  name: 'app',
  components:{
    Dheader
  }
}
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
