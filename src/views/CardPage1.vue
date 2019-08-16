<template>
    <div class="cards">
        <a-card class="acard" body="Card title" :bordered="false" height='20rem'>
            <form-wizard color="#F8AA1F" @on-complete="onComplete"
                        subtitle=""
                        back-button-text="이전"
                        next-button-text="다음"
                        finish-button-text="완료"
                        stepSize="xs"
                        style ="font-family: 'NIXGONM-Vb'">
                <h5 slot="title">상담 및 요청내용을 선택해주세요</h5>

                <!-- 스텝별 컴포넌트 -->
                <tab-content title="지역선택" >
                    <my-tab-component1></my-tab-component1>
                </tab-content>
                <tab-content title="고객정보입력" style="padding:0px">
                    <my-tab-component2></my-tab-component2>
                </tab-content>
                <tab-content title="카드정보입력">
                    <my-tab-component3></my-tab-component3>
                </tab-content>
                <tab-content title="연결정보선택">
                    <my-tab-component4></my-tab-component4>
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
import MyTabComponent4 from './MyTabComponent4.vue'

export default {
    components: {
        FormWizard,
        TabContent,
        MyTabComponent1,
        MyTabComponent2,
        MyTabComponent3,
        MyTabComponent4,
    },
    methods: {
        onComplete: function(){
            alert('요청내용이 제출되었습니다!');
        }
        // Axios로 비동기통신 추가
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lexend+Exa&display=swap');
.cards {
    /* background-color: blue; */
    background-color: rgb(234, 234, 247);
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
