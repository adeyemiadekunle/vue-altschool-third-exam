// import axios from 'axios';
import { v4 as uuid } from 'uuid'
const AUTH_TOKEN_KEY = 'auth_token';

const auth = {
  namespaced: true,

  state: {
    authToken: null,
    currentUser: null,
  },
  mutations: {
    setAuthToken(state) {
      const token = uuid()
      state.authToken = token;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    clearAuthData(state) {
      state.authToken = null;
      state.currentUser = null;
      localStorage.removeItem(AUTH_TOKEN_KEY);
    },
  },
  actions: {

    async login({ commit }, { email, password }) {
      // Send a request to the server to authenticate the user
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const { token, user } = await response.json();

      // Store the auth token and current user in the Vuex store
      commit('setAuthToken', token);
      commit('setCurrentUser', user);
    },

    async signup({ commit }, { name, email, password }) {
      // Send a request to the server to create a new user
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const { token, user } = await response.json();

      // Store the auth token and current user in the Vuex store
      commit('setAuthToken', token);
      commit('setCurrentUser', user);
    },

    logout({ commit }) {
      // Clear the auth data from the Vuex store and local storage
      commit('clearAuthData');
    },
    
  // Load the auth token from local storage on initialization
  // This will allow the user to stay logged in even if they refresh the page
  // Note: This is not secure if you are storing sensitive user data in the token
  // In that case, you should use server-side sessions instead of tokens
 
    init({ commit }) {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      if (token) {
        commit('setAuthToken', token);
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  
};

export default auth;
