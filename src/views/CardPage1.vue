<template>
    <div class="cards">
        <a-card class="acard" body="Card title" :bordered="false" height='20rem'>
            <form-wizard color="#F8AA1F" @on-complete="onComplete"
                        subtitle=""
                        back-button-text="이전"
                        next-button-text="다음"
                        finish-button-text="완료"
                        stepSize="xs">
                <h2 slot="title">고객정보를 입력해주세요</h2> 
                <tab-content title="지역선택" >
                    <my-tab-component1></my-tab-component1>
                </tab-content>
                <tab-content title="고객정보입력">
                    <my-tab-component2></my-tab-component2>
                </tab-content>
                <tab-content title="카드사용정보입력">
                    <my-tab-component3></my-tab-component3>
                </tab-content>
            </form-wizard>
        </a-card>
    </div>
</template>

<script>

import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { Icon } from 'ant-design-vue'
import MyTabComponent1 from './MyTabComponent1.vue'
import MyTabComponent2 from './MyTabComponent2.vue'
import MyTabComponent3 from './MyTabComponent3.vue'

export default {
    components: {
        FormWizard,
        TabContent,
        MyTabComponent1,
        MyTabComponent2,
        MyTabComponent3
    },
    methods: {
      onComplete: function(){
          alert('제출쓰~');
        }
    }
}
</script>

<style>
.cards {
    /* background-color: blue; */
    color: black;
    text-align: center;
    padding: 12px;
    height: 40rem;
}

.acard {
  box-shadow: 5px 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
  border-radius: 10px;
  height: 33rem;
}

</style>
