import Vue from 'vue'
import Vuex from 'vuex'
import proxy from './modules/proxy_content'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        proxy
    }
})

export default store