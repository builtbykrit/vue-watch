import api from '../api';

const state = {
  tags: [],
  selectedTag: null,
};

const getters = {
  tags: ({ tags }) => tags,
  selectedTag: ({ selectedTag }) => selectedTag,
};

const mutations = {
  SET_TAGS: (state, payload) => {
    state.tags = payload;
  },
  SET_SELECTED_TAG: (state, payload) => {
    state.selectedTag = payload;
  },
};

const actions = {
  fetchTags: ({ commit }) => {
    api.get('tags')
      .then(({ data }) => {
        commit('SET_TAGS', data);
      });
  },
  setSelectedTag: ({ commit }, tagName) => {
    commit('SET_SELECTED_TAG', tagName);
  },
  clearSelectedTag: ({ commit }) => {
    commit('SET_SELECTED_TAG', null);
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
