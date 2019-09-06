<template>
    <div class = "container">
        <div class="main" style ="font-family: 'NIXGONM-Vb'">
            <a-back-top />
            
            <div class="maintitle">
            <h5>나에게 딱맞는</h5> 
            <h5>금융전문가를 만나고싶은데..</h5>
            <h3>어디서만나지?</h3>
            <img src="../assets/mainimage.png">
            <a href="#test" style="color:white;"><br><br>
            <button class="button">시작하기</button>
            </a>
            </div>
            <br><br><br><br><br><br>

            <br><br><br><br><br><br>

            <div class="selectPage" id="test">
            <a-card title="카드상품" class="card" headStyle="font-size:25px; padding-top:25px;">
                <a href="/cardpage1" slot="extra" style="font-size:20px;">확인하기 ></a>
            </a-card>
            <a-card title="보험상품" class="card" headStyle="font-size:25px; padding-top:25px;" >
                <a href="/cardpage1" slot="extra" style="font-size:20px">확인하기 ></a>
            </a-card>
            <a-card title="투자상품" class="card" headStyle="font-size:25px; padding-top:25px;">
                <a href="/cardpage1" slot="extra" style="font-size:20px">확인하기 ></a>
            </a-card>
            <a-card title="대출상품" class="card" headStyle="font-size:25px; padding-top:25px;">
                <a href="/cardpage1" slot="extra" style="font-size:20px">확인하기 ></a>
            </a-card>
            
            

            <br><br>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style>

.container {
    background-color: rgb(234, 234, 247);
}
.main {
    background-color: rgb(234, 234, 247);
    height: 100%;

}
.maintitle {
    height: 20rem;
    text-align: center;
}
.card {
    margin: 10px;
    box-shadow: 5px 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    border-radius: 10px 20px 10px 20px ;
    height: 8rem;
    margin-top: 20px;
    font-family: 'NIXGONM-Vb';
    font-size:25px;
}
.cardtext {
    text-align: center;
}
.button {
    position: static;
    background-color: #F8AA1F; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 30px 30px 30px 30px ;
    font-family: 'NIXGONM-Vb';
}
.selectPage {
    display: block;
    padding-top: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
a-card:hover {
    color:red;
}
</style>
