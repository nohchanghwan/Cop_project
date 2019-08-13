<template>
    <div class="header">
        <a href="#default" class="logo">CoP Client</a>
        <div class="icons-list">
            <a-icon type="info-circle" />
        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue'

export default {
    name: 'HeaderComponent'
}
</script>

<style scoped>

.header {
  overflow: hidden;
  background-color: white;
  padding: 15px 15px;
}
.icons-list >>> .anticon {
  /* margin-right: 6px; */
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
