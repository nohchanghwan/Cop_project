<template>
    <div class="card">
        <a-card class="acard" :bordered="false" height=100%>
            <form-wizard color="#F8AA1F"
                        subtitle=""
                        back-button-text="이전"
                        next-button-text="다음"
                        finish-button-text="완료"
                        stepSize="xs">
                <h2 slot="title">상담정보입력</h2> 
                <tab-content title="위치입력" >
                    아래내용을 입력 후 다음버튼을 눌러주세요!
                </tab-content>
                <tab-content title="고객정보입력">
                    아래내용을 입력 후 다음버튼을 눌러주세요!
                </tab-content>
                <tab-content title="카드사용정보입력">
                    아래내용을 입력 후 완료버튼을 눌러주세요!
                </tab-content>
                <div class="input">
                    인풋값
                </div>
            </form-wizard>
        </a-card>
    </div>
</template>

<script>

import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { Icon } from 'ant-design-vue'

export default {
    components: {
        FormWizard,
        TabContent
    },
    props: {
        title: {
            type: String,
            default: 'test'
        },
    }   
}
</script>

<style>
.card {
    /* background-color: blue; */
    color: black;
    text-align: center;
    padding: 12px;
}
.input {
    height:10rem;
}

.acard {
  box-shadow: 5px 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
  border-radius: 9px;

}
</style>
