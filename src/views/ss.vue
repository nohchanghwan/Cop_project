<template>
    <div class="card">
        <a-card class="acard" title="Card title" :bordered="false" height=100%>
            <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
            </a-steps>
            <div class="steps-content">{{steps[current].content}}</div>
            <div class="steps-action">
            <a-button
                v-if="current < steps.length - 1"
                type="primary" @click="next">
                다음으로
            </a-button>
            <a-button
                v-if="current == steps.length - 1"
                type="primary"
                @click="$message.success('Processing complete!')">
                작성완료
            </a-button>
            <a-button
                v-if="current>0"
                style="margin-left: 8px"
                @click="prev">
                이전으로
            </a-button>
            </div>
        </a-card>    
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
import MyTabComponent2 from './MyTabComponent2'

  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: '위치정보입력',
          content: MyTabComponent2 ,
        }, {
          title: 'Second',
          content: 'Second-content',
        }, {
          title: 'Last',
          content: 'Last-content',
        }],
      }
    },
    methods: {
      next() {
        this.current++
      },
      prev() {
        this.current--
      }
    },
  }
</script>

<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
