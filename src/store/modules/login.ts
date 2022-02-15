const SET_USER_NAME = "SET_USER_NAME";
const SET_PASSWORD = "SET_PASSWORD";

export default {
  namespaced: true,

  state: {
    username: "",
    password: "",
  },

  getters: {
    getUsername(state: { username: string }) {
      return state.username;
    },
    getPassword(state: { password: string }) {
      return state.password;
    },
  },

  mutations: {
    [SET_USER_NAME]: (state: { username: string }, username: string) => {
      state.username = username;
    },
    [SET_PASSWORD]: (state: { password: string }, password: string) => {
      state.password = password;
    },
  },

  actions: {
    async setUsername({ dispatch, commit, getters }: any, data: unknown) {
      commit("SET_USER_NAME", data);
    },
    async setPassword({ dispatch, commit, getters }: any, data: unknown) {
      commit("SET_PASSWORD", data);
    },
  },
};
