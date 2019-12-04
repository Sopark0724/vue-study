import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store2 = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        job_list: [],
        user: {},
        ask_detail: {},
        list: []
    }
})