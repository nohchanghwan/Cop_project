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
                <tab-content class="tab" title="지역선택" >
                    <a-input placeholder="이름을 입력하세요" v-model="newUser"/>
                    <a-input placeholder="이름을 입력하세요" v-model="newUser2"/>
                    <div class="checkbox custom">
                        <a-col :span="6"><input type="checkbox" id="box5" value="음식점" class="css-checkbox" v-model="checkedNames">
                        <label for="box5" class="css-label-yellow">음식점</label></a-col> 
                        <a-col :span="6"><input type="checkbox" id="box6" value="주유소" class="css-checkbox" v-model="checkedNames">
                        <label for="box6" class="css-label-yellow">주유소</label></a-col> 
                        <a-col :span="6"><input type="checkbox" id="box7" value="통신" class="css-checkbox" v-model="checkedNames">
                        <label for="box7" class="css-label-yellow">통신</label></a-col> 
                        <a-col :span="6"><input type="checkbox" id="box8" value="백화점" class="css-checkbox" v-model="checkedNames">
                        <label for="box8" class="css-label-yellow">백화점</label></a-col>      
                    </div>            
                </tab-content>

                <tab-content class="tab" title="고객정보입력" style="padding:0px">
                    <a-col :span="3">
                    <h5>Q1. </h5></a-col>
                    <a-col :span="21">
                    <h5>한달에 얼마나 사용하시나요?</h5></a-col>

                    <a-radio-group @change="onChange" v-model="cash">
                        <a-radio-button style=" width:100px" value="50">~50만</a-radio-button>
                        <a-radio-button style=" width:100px" value="100">~100만</a-radio-button>
                        <a-radio-button style=" width:100px" value="150">~150만</a-radio-button>
                    </a-radio-group>
                    <a-radio-group @change="onChange" v-model="cash">
                        <a-radio-button style=" width:100px" value="200">~200만</a-radio-button>
                        <a-radio-button style=" width:100px" value="300">~300만</a-radio-button>
                        <a-radio-button style=" width:100px" value="500">~500만</a-radio-button>
                    </a-radio-group>
                    <br><br>
                    <a-col :span="3">
                    <h5>Q2. </h5></a-col>
                    <a-col :span="21">
                    <h5>어디에서 할인받고 싶으신가요?</h5></a-col>

                    <a-select
                        mode="tags"
                        style="width: 100%"
                        @change="handleChange"
                        placeholder="빈칸을 누르고 아래항목에서 선택해주세요!"
                        v-model="myplace"
                    >
                        <a-select-option value="대중교통">대중교통</a-select-option>
                        <a-select-option value="편의점">편의점</a-select-option>
                        <a-select-option value="카페">카페</a-select-option>
                        <a-select-option value="음식점">음식점</a-select-option>
                        <a-select-option value="주유소">주유소</a-select-option>
                        <a-select-option value="통신">통신</a-select-option>
                        <a-select-option value="백화점">백화점</a-select-option>
                        <a-select-option value="인터넷쇼핑">인터넷쇼핑</a-select-option>
                        <a-select-option value="학원">학원</a-select-option>
                        <a-select-option value="게임">게임</a-select-option>
                        <a-select-option value="헬스">헬스</a-select-option>
                        <a-select-option value="놀이동산">놀이동산</a-select-option>
                        <a-select-option value="제과점">제과점</a-select-option>
                    </a-select>
                    <!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames2">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames2">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames2">
                    <label for="mike">Mike</label>                          -->
                </tab-content>

                <tab-content class="tab" title="카드정보입력">
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">One</label>
                    <br>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">Two</label>
                    <br>
                    <div class="checkbox custom">
                        <input type="radio" id="three" value="three" class="css-checkbox" v-model="picked">
                        <label for="three" class="css-label-yellow">three</label> 
                    </div>

                </tab-content>
                <tab-content class="tab" title="연결정보선택">
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
import { Button } from 'ant-design-vue';
import { userInfo } from 'os';


export default {
    components: {
        FormWizard,
        TabContent
    },
    data() {

        return {
            newUser : '',
            newUser2 : '',
            checkedNames : [],
            checkedNames2 : [],
            picked : [],
            myplace : [],
            cash : ''
        }
    },

    methods: {
        onComplete: function(){
            alert('제출이 완료되었습니다');
            // axios POST HTTP통신
            submitInfo({ 
                newUser:this.newUser, 
                newUser2:this.newUser2,
                checkedNames:this.checkedNames, 
                checkedNames2:this.checkedNames2, 
                picked:this.picked,
                cash:this.cash,
                myplace:this.myplace,
            })
            .then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            })
        },

        //라디오박스 메소드
        onChange (e) {
        console.log(`checked = ${e.target.value}`)
        },
        //체크박스 메소드
        onChange (checkedValues) {
        
        },
        handleChange(value) {
        console.log(`selected ${value}`);
        },
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
.tab {
    height: 17rem;
}
.acard {
  box-shadow: 5px 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
  border-radius: 10px;
  height: 33rem;
}


/* 여기는체크박스 */
.checkbox.custom {
  float: left;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  margin-bottom: 5px;
}
input[type=checkbox].css-checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(5 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  border: 0;

}
input[type=checkbox].css-checkbox+label.css-label-yellow {
  padding-left: 34px;
  height: 32px;
  display: inline-block;
  line-height: 35px;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 15px;
  vertical-align: middle;
  cursor: pointer;
  opacity: 1;
}

input[type=checkbox].css-checkbox+label.css-label-yellow:hover{
/*   opacity: 0.5; */ /* 선택적 사용 */
}

input[type=checkbox].css-checkbox:checked+label.css-label-yellow{
  background-position: 0 -33px;
}

.css-label-yellow {
  /* background-image: url(http://codeopus.net/file/blog/check3.png); */
  background:url('../assets/check4.png') no-repeat;
}
</style>
