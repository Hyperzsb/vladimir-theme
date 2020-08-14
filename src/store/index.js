import Vue from 'vue'
import Vuex from 'vuex'
import {config} from './config'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        config,
        navItem: -1
    },
    mutations: {
        changeNavItem(state, index) {
            state.navItem = index;
        }
    }
});

export default index;
