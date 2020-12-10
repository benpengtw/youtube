import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isShow: false,
    },
    mutations: {
        setIsShow(state) {
            if (state.isShow == true)
                state.isShow = false
            else if (state.isShow == false) {
                state.isShow = true
            }
        }
    },
    actions: {
    },
    modules: {
    },
});
