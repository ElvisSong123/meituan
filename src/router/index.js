import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '@/components/firstPage'
import mainPage from '@/components/mainPage'
import chooseCity from '@/components/chooseCity';
import productDetail from '@/components/productDetail';
import blank from '@/components/blank';
import Login from '@/components/login&register/login';
import Register from '@/components/login&register/register'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'firstPage',
            redirect: '/main',
            component: firstPage,
            children: [{
                path: '/main',
                name: 'mainPage',
                component: mainPage
            }, {
                path: '/chooseCity',
                name: 'chooseCity',
                component: chooseCity
            }, {
                path: '/productDetail/:id',
                name: 'productDetail',
                component: productDetail
            }],
        },
        {
            path: '/blank',
            name: 'blank',
            component: blank,
            children: [{
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register
                }
            ]
        }
    ]
})