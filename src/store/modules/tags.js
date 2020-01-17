import api from '../api';

const state = {
  tags: [],
};

const getters = {
  tags: ({ tags }) => tags,
};

const mutations = {
  SET_TAGS: (state, payload) => {
    state.tags = payload;
  },
};

const actions = {
  fetchTags: ({ commit }) => {
    api.get('tags')
      .then(({ data }) => {
        commit('SET_TAGS', data);
      });
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
