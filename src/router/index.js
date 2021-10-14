import Vue from 'vue';
import VueRouter from 'vue-router';


import Login from '@/components/admin/Login';
import Dashboard from '@/components/admin/Dashboard';
import Products from '@/components/pages/Products';
import Main from '@/components/customer/Main';
import Brand from '@/components/customer/Brand';
import Location from '@/components/customer/Location';
import Product from '@/components/customer/Product';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Coupon from '@/components/pages/Coupon';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Order from '@/components/customer/Order';
import Checkout from '@/components/customer/Checkout';
import Home from '@/components/customer/Home';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/',
        },
        {
            path:'/',
            name:'主要頁面',
            component:Main,
            children:[
                {
                    path:'/',
                    name:'首頁',
                    component:Home
                },
                {
                    path:'/brand',
                    name:'品牌故事',
                    component:Brand
                },
                {
                    path:'/product',
                    name:'供應商品',
                    component:Product
                },
                {
                    path:'/location',
                    name:'交通方式',
                    component:Location
                },
                {
                    path:'/order',
                    name:'確認商品頁面',
                    component:Order
                },
                {
                    path:'/checkout/:orderId',
                    name:'顧客送出訂單',
                    component:Checkout, 
                },
            ]    
        },
        {
            name:'後台登入',
            path:'/login',
            component:Login
        },
        {
            name:'後台',
            path:'/admin',
            component:Dashboard,
            meta: { requiresAuth: true },
            children:[
                {
                    path:'/',
                    name:'後台產品',
                    component:Products,
                },
                {
                    path:'coupon',
                    name:'優惠碼',
                    component:Coupon
                },
                {
                    path:'customer_order',
                    name:'模擬訂單',
                    component:CustomerOrder,
                },
                {
                    path:'customer_checkout/:orderId',
                    name:'模擬送出訂單',
                    component:CustomerCheckout,
                },
            ]
        }
    ]
})