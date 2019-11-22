import axios from 'axios';
import qs from 'qs';

import api from '../api';

const state = {
  plugins: [],
  pluginCount: 0,
  loadingPlugins: false,
  next: '',
};

const getters = {
  loadingPlugins: ({ loadingPlugins }) => loadingPlugins,
  next: ({ next }) => next,
  plugins: ({ plugins }) => plugins,
  pluginsSortedByScore: ({ plugins }) => plugins.sort((a, b) => (a.score < b.score ? 1 : -1)),
  pluginCount: ({ pluginCount }) => pluginCount,
};

const mutations = {
  ADD_PLUGINS: (state, payload) => {
    state.plugins = [...state.plugins, ...payload];
  },
  SET_PLUGINS: (state, payload) => {
    state.plugins = payload;
  },
  UPDATE_PLUGIN_COUNT: (state, payload) => {
    state.pluginCount = payload;
  },
  SET_LOADING_PLUGINS: (state, payload) => {
    state.loadingPlugins = payload;
  },
  SET_NEXT: (state, payload) => {
    state.next = payload;
  },
};

const actions = {
  fetchNext: ({ commit, state }) => {
    commit('SET_LOADING_PLUGINS', true);
    return axios.get(state.next)
      .then(({ data }) => {
        commit('ADD_PLUGINS', data.results);
        commit('SET_NEXT', data.next);
      }).finally(() => {
        commit('SET_LOADING_PLUGINS', false);
      });
  },
  fetchPlugins: ({ commit }) => {
    commit('SET_LOADING_PLUGINS', true);
    return api.get('vue_plugins')
      .then(({ data }) => {
        commit('SET_PLUGINS', data.results);
        commit('UPDATE_PLUGIN_COUNT', data.count);
        commit('SET_NEXT', data.next);
      }).finally(() => {
        commit('SET_LOADING_PLUGINS', false);
      });
  },
  searchPlugins: ({ commit }, search) => {
    commit('SET_LOADING_PLUGINS', true);
    const params = qs.stringify({ search });

    return api.get(`vue_plugins/?${params}`)
      .then(({ data }) => {
        commit('SET_PLUGINS', data.results);
        commit('UPDATE_PLUGIN_COUNT', data.count);
        commit('SET_NEXT', data.next);
      }).finally(() => {
        commit('SET_LOADING_PLUGINS', false);
      });
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
