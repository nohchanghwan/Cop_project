<template>
  <div class="main" id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <!-- <FooterComponent></FooterComponent> -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
//import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    // FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
.main{
  font-family: 'Varela Round', sans-serif;
}
</style>
