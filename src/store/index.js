import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isShow: false,
    },
    mutations: {
        setIsShow(state, payload) {
            state.isShow = payload.isShow
        }
    },
    actions: {
    },
    modules: {
    },
});
