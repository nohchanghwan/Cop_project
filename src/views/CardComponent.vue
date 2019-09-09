<template>
    <div class="cards">
        <a-card class="acard" body="Card title" :bordered="false" height='20rem'>
            <form-wizard color="#F8AA1F" 
                        @on-complete="onComplete"
                        subtitle=""
                        back-button-text="이전"
                        next-button-text="다음"
                        finish-button-text="제출하기"
                        stepSize="xs"
                        style ="font-family: 'NIXGONM-Vb'">
                <h5 slot="title">상담 및 요청내용을 선택해주세요</h5>


                <!-- 스텝1 컴포넌트 -->
                <tab-content class="tab" title="정보동의" >
                    <div class="jungbo">
                         개인정보의 수집항목 및 이용목적<br>
                        ① 개인정보란?
                        생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.
                        ② 회사는 고객이 회원가입을 할 때 서비스 제공을 위해 필요한 필수적인 최소한의 개인정보를 받고 있습니다. 회사가 고객의 개인정보를 수집하는 목적은 인터파크 사이트를 통하여 고객에게 최적의 서비스를 제공해 드리기 위한 것이며 고객이 제공한 개인정보를 바탕으로 고객에게 보다 더 유용한 정보를 선택적으로 제공하기 위한 것입니다.
                        ③ 회사는 고객의 사전 동의 없이는 고객의 개인정보를 사전에 밝힌 목적 이외로 이용하거나 제3자에게 공개하지 않습니다.
                        ④ 회사는 관련 법령에 의하거나 기타 아래의 항목을 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
                    </div><br>
                    <div class="checkbox custom" style="text-align:left;">
                        <!-- <a-col :span="24"> -->
                        <!-- <input type="checkbox" id="box5" value="음식점" class="css-checkbox" v-model="checkedNames">
                        <label for="box5" class="css-label-yellow">위 약관에 동의합니다.</label> -->
                        <a-checkbox @change="onChange" style ="font-family: 'NIXGONM-Vb'; font-size:15px" >위 약관에 동의합니다.</a-checkbox><br><br>
                        <!-- </a-col>       -->
                    </div>
                </tab-content>


                <!-- 스텝2 컴포넌트 -->
                <tab-content class="tab" title="고객정보입력" style="padding:0px">
                    <a-col :span="4"><a-icon type="user-add" style="fontSize:20px; padding-top:10px" /></a-col>
                    <a-col :span="20"><input class="line" type="text" placeholder="사용자이름" v-model="userName"></a-col><br><br>
                    <a-col :span="4"><a-icon type="phone" style="fontSize:20px; padding-top:10px" /></a-col>
                    <a-col :span="20"><input class= "line" type="text" placeholder="휴대폰번호를 입력하세요" v-model="phoneNum"></a-col><br><br>
                    <a-button type="primary">휴대폰 인증하기</a-button><br><br>
                    <a-col :span="4"><a-icon type="home" style="fontSize:20px; padding-top:10px" /></a-col>
                    <a-col :span="20">
                    <a-select :defaultValue="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
                    <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
                    </a-select>
                    <a-select v-model="secondCity" style="width: 120px">
                    <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
                    </a-select></a-col><br><br>
                </tab-content>


                <!-- 스텝3 컴포넌트 -->
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
                        v-model="myplace">
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
                    </a-select><br><br>

                    <a-col :span="3">
                    <h5>Q3. </h5></a-col>
                    <a-col :span="21">
                    <h5>연회비는 얼마나 원하시나요</h5></a-col>
                    <a-radio-group @change="onChange" v-model="annualFee">
                        <a-radio-button style=" width:100px" value="~1만">~1만</a-radio-button>
                        <a-radio-button style=" width:100px" value="1~2만">1~2만</a-radio-button>
                        <a-radio-button style=" width:100px" value="3~5만">3~5만</a-radio-button>
                    </a-radio-group>
                    <a-radio-group @change="onChange" v-model="annualFee">
                        <a-radio-button style=" width:100px" value="5~10만">5~10만</a-radio-button>
                        <a-radio-button style=" width:100px" value="10~20만">10~20만</a-radio-button>
                        <a-radio-button style=" width:100px" value="20만">20만~</a-radio-button>
                    </a-radio-group><br><br>

                    <a-col :span="3">
                    <h5>Q4. </h5></a-col>
                    <a-col :span="21">
                    <h5>귀하의 연령대는 어떻게 되나요?</h5></a-col>
                    <a-radio-group @change="onChange" v-model="age">
                        <a-radio-button style=" width:100px" value="20~30대">20~30대</a-radio-button>
                        <a-radio-button style=" width:100px" value="40대">40대</a-radio-button>
                        <a-radio-button style=" width:100px" value="50대">50대</a-radio-button>
                    </a-radio-group><br><br>
                </tab-content>


                <!-- 스텝4 컴포넌트 -->            
                <tab-content class="tab" title="연결정보선택">
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

//집주소 더미데이터
const provinceData = ['서울특별시', '부천시', '시흥시'];
const cityData = {
  서울특별시: ['영등포구', '구로구', '마포구'],
  부천시: ['상동', '중동', '원미동'],
  시흥시: ['은행동', '대야동', '계수동'],
};

export default {
    test:"sadsasadsa",
    components: {
        FormWizard,
        TabContent
    },
    data() {
        return {
            userName : '',
            phoneNum : '',
            picked : [],
            myplace : [],
            cash : '',
            annualFee : '',
            age : '',
            provinceData,
            cityData,
            firstCity: provinceData[0],
            cities: cityData[0],
            secondCity: cityData[provinceData[0]][0],
        }
    },

    methods: {
        onComplete: function(){
            alert('제출이 완료되었습니다');
            // axios POST HTTP통신
            submitInfo({ 
                userName:this.userName, 
                phoneNum:this.phoneNum, 
                cash:this.cash,
                myplace:this.myplace,
                annualFee:this.annualFee,
                age:this.age,
                secondCity:this.secondCity,
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

        //집주소 메소드
        handleProvinceChange(value) {
        this.cities = cityData[value]
        this.secondCity = cityData[value][0]
        this.firstCity= cityData
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
    /* height: 17rem; */
}
.acard {
    box-shadow: 5px 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    border-radius: 10px;
  /* height: 33rem; */
}

.jungbo {
    overflow:scroll;
    height:200px;
    border: 2px solid;
    border-color: #D3D3D3;
}

.line {
    display: block;
    border: none;
    color: #333;
    background: transparent;
    border-bottom: 1px dotted black;
    padding: 10px 2px 0 2px;
}

.line:focus {
    outline: none;
    border-color: #F8AA1F;
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
