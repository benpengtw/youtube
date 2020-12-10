import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})
export default new Vuex.Store({
    state: {
        isShow: false,
        likeList: []
    },
    mutations: {
        setIsShow(state, payload) {
            state.isShow = payload.isShow
        },
        addToLikeList(state, payload) {
            state.likeList.push(payload)
        }
    },
    actions: {
    },
    modules: {
    },
    plugins: [vuexLocal.plugin]
});
