<template>
    <div class="tab">
        <input placeholder="이름을 입력하세요" v-model="newUser">
        <!-- <a-select :defaultValue="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
        <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
        </a-select><br>
        <a-select v-model="secondCity" style="width: 120px">
        <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
        </a-select><br>
        <a-select v-model="thiedCity" style="width: 120px">
        <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
        </a-select> -->
    </div>
</template>

<script>
// const provinceData = ['서울특별시', '인천광역시'];
// const cityData = {
//   서울특별시: ['강남구', '강서구', '영등포구'],
//   인천광역시: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };
export default {
  data() {
    return {
      newUser: ""
      // provinceData,
      // cityData,
      // cities: cityData[provinceData[0]],
      // secondCity: cityData[provinceData[0]][0],
    }
  },
  methods: {
    // handleProvinceChange(value) {
    //   this.cities = cityData[value]
    //   this.secondCity = cityData[value][0]
    // }
  }
}
</script>

<style scoped>
.tab{
  height: 17rem;
}
</style>
