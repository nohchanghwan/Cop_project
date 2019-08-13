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
/* @font-face { font-family: 'GyeonggiBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiBatang.woff') format('woff'); font-weight: normal; font-style: normal; } */
/* @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap'); */
/* @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css); NanumSquare */
@import url('https://fonts.googleapis.com/css?family=Lexend+Exa&display=swap');
.main{
  /* font-family: 'GyeonggiBatang', sans-serif; */
  font-family: 'Lexend Exa', sans-serif;


}
</style>
