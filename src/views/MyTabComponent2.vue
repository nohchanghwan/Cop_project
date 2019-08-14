<template>
    <div class="tab">
        <h6>Q1.한달에 얼마나 사용하시나요?</h6>
        <div class="btn-group-vertical">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <a-row>
                    <a-col :span="6"><button type="button" class="btn btn-secondary">12</button></a-col>
                    <a-col :span="6"><button type="button" class="btn btn-secondary">5</button></a-col>
                    <a-col :span="6"><button type="button" class="btn btn-secondary">125</button></a-col>
                    <a-col :span="6"><button type="button" class="btn btn-secondary">5</button></a-col>
                </a-row>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
                <button type="button" class="btn btn-secondary">8</button>
            </div>    
        </div>
        <br>
        <br>
        <h6>Q2.어디에서 할인받고 싶으신가요?</h6>
        <div class="btn-group-vertical">
            <div class="btn-group mr-2" role="group" aria-label="Secoond group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Secoond group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
                <button type="button" class="btn btn-secondary">8</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Secoond group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
                <button type="button" class="btn btn-secondary">8</button>
            </div>    
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
.btn btn-secondary {

}
</style>
