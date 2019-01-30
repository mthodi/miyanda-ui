import Router from 'vue-router'
import Vue from 'vue'

//views
import Index from './views/Index.vue'
import CompanyDetailed from './views/CompanyDetailed.vue'
import RatioAnalysis from './views/RatioAnalysis.vue'
import RatioAnalysisDetailed from './views/RatioAnalysisDetailed'
import Screener from './views/Screener.vue'
import Valuation from './views/Valuation.vue'
import About from './views/About.vue'
import Backtester from './views/Backtester.vue'
//import FinacialTable from './views/FinancialTable.vue'

Vue.use(Router)

const router = new Router({
    mode : 'history',
    routes: [{
        path: '/screener',
        component: Screener,
    },{
        path: '/',
        component : Index
    },{
        path: '/company/:id',
        component: CompanyDetailed
    },{
        path: '/valuation',
        component: Valuation
    },{
        path: '/ratios',
        component: RatioAnalysis
    },{
        path: '/ratios/:id',
        component: RatioAnalysisDetailed
    },{
        path: '/about',
        component: About
    },{
        path: '/backtest',
        component: Backtester
    }]
})

export default router;