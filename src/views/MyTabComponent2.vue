<template>
    <div class="tab">
        <a-button type="danger" block size="medium" text-color="black">한달에 얼마나 사용하시나요?</a-button>
        <div>
            <a-radio-group @change="onChange" v-model="value" size="small">
            <a-radio-button value="a">50~100만원</a-radio-button>
            <a-radio-button value="b">50~100만원</a-radio-button>
            <a-radio-button value="c">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            </a-radio-group>   
        </div>
        <br>
        <a-button type="danger" block size="medium">어디에서 할인받고 싶으신가요?</a-button>
        <div>
            <a-radio-group @change="onChange" v-model="value" size="small">
            <a-radio-button value="a">50~100만원</a-radio-button>
            <a-radio-button value="b">50~100만원</a-radio-button>
            <a-radio-button value="c">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            <a-radio-button value="d">50~100만원</a-radio-button>
            </a-radio-group>
        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue'

export default {

}
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
