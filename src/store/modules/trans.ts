const SET_USER_NAME = 'SET_USER_NAME'
const SET_RANDOM_IMG = 'SET_RANDOM_IMG'

export default {
  namespaced: true,

  state: {
    username: 'Tom',
    randomImg: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_8258.jpg',
  },

  getters: {
    getUsername (state: { username: string }) {
      return state.username
    },
    getRandomImg (state: { randomImg: string }) {
      return state.randomImg
    },
  },

  mutations: {
    [SET_USER_NAME]: (state: { username: string }, username: string)=>{
      state.username = username
    },
    [SET_RANDOM_IMG]: (state: { randomImg: string }, randomImg: string)=>{
      state.randomImg = randomImg
    },
  },

  actions: {
    async setUsername ({dispatch, commit, getters}: any, data: unknown) {
        debugger
        commit('SET_USER_NAME', data)
    },
  },
}



