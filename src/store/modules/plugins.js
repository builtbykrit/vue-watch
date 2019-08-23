import api from '../api';

const state = {
  plugins: [],
};

const getters = {
  plugins: ({ plugins }) => plugins,
  pluginsSortedByScore: ({ plugins }) => plugins.sort((a, b) => (a.score < b.score ? 1 : -1)),
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
        commit('UPDATE_PLUGINS', data.results);
      });
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
