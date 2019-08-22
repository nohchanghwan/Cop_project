<template>
    <div class="cards">
        <a-card class="acard" body="Card title" :bordered="false" height='20rem'>
            <form-wizard color="#F8AA1F" 
                        @on-complete="onComplete"
                        subtitle=""
                        back-button-text="이전"
                        next-button-text="다음"
                        finish-button-text="완료"
                        stepSize="xs"
                        style ="font-family: 'NIXGONM-Vb'">
                <h5 slot="title">상담 및 요청내용을 선택해주세요</h5>

                <!-- 스텝별 컴포넌트 -->
                <tab-content title="지역선택" >
                    <a-input placeholder="이름을 입력하세요" v-model="newUser"/>
                    <a-input placeholder="이름을 입력하세요" v-model="newUser2"/>

                    <!-- <my-tab-component1></my-tab-component1> -->
                </tab-content>
                <tab-content title="고객정보입력" style="padding:0px">
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                    <label for="mike">Mike</label>
                    <br><br>
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames2">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames2">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames2">
                    <label for="mike">Mike</label>                         
                    <!-- <my-tab-component2></my-tab-component2> -->
                </tab-content>
                <tab-content title="카드정보입력">
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">One</label>
                    <br>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">Two</label>
                    <br>
                    <!-- <my-tab-component3></my-tab-component3> -->
                </tab-content>
                <tab-content title="연결정보선택">
                    <my-tab-component4></my-tab-component4>
                </tab-content>
            </form-wizard>
        </a-card>
    </div>
</template>

<script>
import { submitInfo } from '../api/index.js';
import axios from 'axios';


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

    data() {
        return {
        newUser:"",
        newUser2:"",
        checkedNames: [],
        checkedNames2: [],
        picked: []
        
        // provinceData,
        // cityData,
        // cities: cityData[provinceData[0]],
        // secondCity: cityData[provinceData[0]][0],
        }
    },

    methods: {
        onComplete: function(){
            alert('제출쓰~');
            axios.post('/api', 
            { newUser:this.newUser, newUser2:this.newUser2,checkedNames:this.checkedNames, checkedNames2:this.checkedNames2,picked:this.picked  }
            ).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            })
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lexend+Exa&display=swap');
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
