import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue';
import CardPage1 from '../views/CardPage1.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    //해쉬값 제거
    mode: 'history',
    routes: [
        {
            //path: url주소
            path: '/',
            //component: url주소로 갔을 때 표시될 컴포넌트(페이지)
            component: MainView
        },
        {
            //path: url주소
            path: '/cardpage1',
            //component: url주소로 갔을 때 표시될 컴포넌트(페이지)
            component: CardPage1
        }
    ]
});