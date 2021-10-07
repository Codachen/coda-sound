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
import Welcome from '@/components/customer/Welcome';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login',
        },
        {
            path:'/',
            name:'主要頁面',
            component:Welcome,
            children:[
                {
                    path:'',
                    name:'主要頁面',
                    component:Main,
                },
                {
                    path:'/checkout/:orderId',
                    name:'顧客送出訂單',
                    component:Checkout, 
                }
            ]
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
            name:'後台登入',
            path:'/login',
            component:Login
        },
        {
            path:'/order',
            name:'確認商品頁面',
            component:Order
        },
        {
            name:'後台',
            path:'/admin',
            component:Dashboard,
            children:[
                {
                    path:'products',
                    name:'後台產品',
                    component:Products,
                    meta: { requiresAuth: true },
                },
                {
                    name:'優惠碼',
                    path:'/coupon',
                    component:Coupon
                },
            ]
        },
        {
            name:'後台',
            path:'/',
            component:Dashboard,
            children:[
                {
                    path:'customer_order',
                    name:'模擬訂單',
                    component:CustomerOrder,
                },
                {
                    path:'customer_checkout/:orderId',
                    name:'送出訂單',
                    component:CustomerCheckout,
                },
                
            ]
        }
    ]
})