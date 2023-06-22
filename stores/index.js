export const state = () => ({
  userinfo: {},
})

export const getters = {
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  SET_USER_INFO(state, userinfo) {
    state.userinfo = userinfo
  },
}

export const actions = {
  setUserData(vuexContext, userinfo) {
    vuexContext.commit('SET_USER_INFO', userinfo)
  },
}
