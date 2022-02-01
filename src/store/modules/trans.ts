const SET_USER_NAME = "SET_USER_NAME";
const SET_TRANS_WORD = "SET_TRANS_WORD";
const SET_RANDOM_IMG = "SET_RANDOM_IMG";

export default {
  namespaced: true,

  state: {
    username: "Tom",
    word: "",
    randomImg: "",
  },

  getters: {
    getUsername(state: { username: string }) {
      return state.username;
    },
    getRandomImg(state: { randomImg: string }) {
      return state.randomImg;
    },
    getTransWord(state: { word: string }) {
      return state.word;
    },
  },

  mutations: {
    [SET_USER_NAME]: (state: { username: string }, username: string) => {
      state.username = username;
    },
    [SET_TRANS_WORD]: (state: { word: string }, word: string) => {
      state.word = word;
    },
    [SET_RANDOM_IMG]: (state: { randomImg: string }, randomImg: string) => {
      state.randomImg = randomImg;
    },
  },

  actions: {
    async setUsername({ dispatch, commit, getters }: any, data: unknown) {
      commit("SET_USER_NAME", data);
    },
    async setTransword({ dispatch, commit, getters }: any, data: unknown) {
      commit("SET_TRANS_WORD", data);
    },
  },
};
