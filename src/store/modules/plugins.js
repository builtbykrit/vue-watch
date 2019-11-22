import api from '../api';

const state = {
  plugins: [],
  pluginCount: 0,
};

const getters = {
  plugins: ({ plugins }) => plugins,
  pluginsSortedByScore: ({ plugins }) => plugins.sort((a, b) => (a.score < b.score ? 1 : -1)),
  pluginCount: ({ pluginCount }) => pluginCount,
};

const mutations = {
  UPDATE_PLUGINS: (state, payload) => {
    state.plugins = payload;
  },
  UPDATE_PLUGIN_COUNT: (state, payload) => {
    state.pluginCount = payload;
  },
};

const actions = {
  fetchPlugins: ({ commit }) => {
    api.get('vue_plugins')
      .then(({ data }) => {
        commit('UPDATE_PLUGINS', data.results);
        commit('UPDATE_PLUGIN_COUNT', data.count);
      });
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
