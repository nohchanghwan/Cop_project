import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue';
import CardComponent from '../views/CardComponent.vue';


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
            path: '/card',
            //component: url주소로 갔을 때 표시될 컴포넌트(페이지)
            component: CardComponent
        }
        // {
        //     //path: url주소
        //     path: '/CardComponent',
        //     //component: url주소로 갔을 때 표시될 컴포넌트(페이지)
        //     component: CardComponent
        // }
    ]
});