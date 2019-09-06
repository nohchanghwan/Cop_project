<template>
    <div class="header" style ="font-family: 'NIXGONM-Vb'">
        <!-- <a href="/" class="logo">CoP_client</a> -->
        <!-- <img  src="../assets/headerlogo.png" WIDTH=110 HEIGHT=70 href="/" > -->
        <!-- <img  class = "icons-list" src="../assets/headerlogo.png"> -->
        <div class="icons-list" >
            <a href="/" style = "padding:0px">
              <img src="../assets/headerlogo2.png">
            </a>
            <a-badge count="15" style= "float:right; margin-right: 12px;margin-top: 6px;">
            <a-icon type="ellipsis" @click="showDrawer" />
            </a-badge>
            <a-drawer
              title="사용자설정"
              placement="right"
              :closable="false"
              @close="onClose"
              :visible="visible"
            >
              <my-tab-component4></my-tab-component4>
            </a-drawer>
        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
import MyTabComponent4 from '../views/MyTabComponent4.vue'

export default {
    components: {
      MyTabComponent4
    },
    name: 'HeaderComponent',
    data() {
      return {
        visible: false,
      }
    },
    methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>

<style scoped>

.header {
  overflow: hidden;
  background-color: rgb(234, 234, 247);
  padding: 15px 15px;
}
.icons-list >>> .anticon {
  margin-right: 10px;
  font-size: 30px;
  float: right;
  padding-top:5px;
}


/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */ 

</style>
