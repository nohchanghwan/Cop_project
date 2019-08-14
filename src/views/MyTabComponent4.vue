<template>
    <div class="tab">
        ※매칭 후 연결정보 선택
        <a-row>
        <a-col :span="18"><h6>전화수신받기(안심번호)</h6></a-col>
        <a-col :span="6"><a-switch  @change='onChange' style="color:yellow;" color="yellow"/></a-col>
        </a-row><br>
        <a-row>
        <a-col :span="18"><h6>문자수신받기(안심번호)</h6></a-col>
        <a-col :span="6"><a-switch  @change='onChange' style="color:yellow;" color="yellow"/></a-col>
        </a-row><br>
        <a-row>
        <a-col :span="18"><h6>상대방 연락처 받기</h6></a-col>
        <a-col :span="6"><a-switch  @change='onChange' style="color:yellow;" color="yellow"/></a-col>
        </a-row><br>
        <a-row>
        <a-col :span="18"><h6>내연락처 상대애게 공개</h6></a-col>
        <a-col :span="6"><a-switch defaultChecked @change='onChange' style="color:yellow;" color="yellow"/></a-col>
        </a-row><br>
    </div>
</template>

<script>
export default {
    data () {
      return {
      }
    },
    methods: {
      onChange(checked){
        console.log(`a-switch to ${checked}`);
      }
    },
}
</script>

<style>

</style>
