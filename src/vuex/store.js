import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    position: '北京',
    userName: '',
    alreadyLogin: false
}

const mutations = {
    setPosition(state, val) {
        state.position = val
    },
    setUserName(state, val) {
        state.userName = val
    },
    setLogin(state, val) {
        state.alreadyLogin = val
    }
}

const actions = {
    setPosition({ commit }, val) {
        // 异步请求后端获取当前位置数据
        commit('setPosition', val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})