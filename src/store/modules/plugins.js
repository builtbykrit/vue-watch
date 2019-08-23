import api from '../api';

const state = {
  plugins: [],
};

const getters = {
  plugins: ({ plugins }) => plugins,
};

const mutations = {
  UPDATE_PLUGINS: (state, payload) => {
    state.plugins = payload;
  },
};

const actions = {
  fetchPlugins: ({ commit }) => {
    api.get('vue_plugins')
      .then(({ data }) => {
        console.log(data);
        commit('UPDATE_PLUGINS', data);
      });
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
