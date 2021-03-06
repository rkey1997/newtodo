import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/Index';
import View from '@/components/View';



Vue.use(VueRouter);

let router = new VueRouter({

    routes: [{
            path: '/',
            name: 'index',
            component: Index,
            props: true,
        },
        {
            path: "/view",
            name: 'view',
            component: View,
            props: true,
        },
    ]

});
export default router;