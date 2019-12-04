import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        job_list: [],
        user: {},
        ask_detail: {},
        list: []
    },
    getters: {
        fetchedNew(state) {
            return state.news;
        },
        fetchedAsk(state) {
            return state.asks;
        },
        fetchedJobList(state) {
            return state.job_list;
        },
        fetchedItem(state) {
            return state.ask_detail;
        }
    },
    mutations,
    actions
})