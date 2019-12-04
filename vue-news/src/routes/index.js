import Vue from 'vue';
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import CreateListView from '../views/CreateListView'
import bus from '../util/bus.js'
import {store} from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path : url 주소
            path:'/news', 
            // component: url 주소로 갔을 때 표시될 컴포넌트
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/ask/:id',
            component: CreateListView('AskDetailView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ]
});