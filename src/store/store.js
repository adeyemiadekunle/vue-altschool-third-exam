import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { createStore } from "vuex";

// Initialize Firebase app
const firebaseConfig = {
  // your firebase config object here
  apiKey: "AIzaSyA6TqjxSeZ7fnvMZeVE7VHpsZr3u1v0Ac4",
  authDomain: "vue-altschool-third-exam.firebaseapp.com",
  projectId: "vue-altschool-third-exam",
  storageBucket: "vue-altschool-third-exam.appspot.com",
  messagingSenderId: "422327894895",
  appId: "1:422327894895:web:a20ca737d97424e007de9a"
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const store = createStore({
  state: {
    user: null,
    firstName: '',
    lastName: '',
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    setFirstName(state, firstName) {
      state.firstName = firstName;
    },
    setLastName(state, lastName) {
      state.lastName = lastName;
    },
    unsetUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
  
  actions: {
    signUp({ commit }, { email, password, firstName, lastName }) {
      return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            commit('setUser', user.uid);
            commit('setFirstName', firstName);
            commit('setLastName', lastName);
            set(ref(db, `users/${user.uid}`), {
              firstName: firstName,
              lastName: lastName
            })
              .then(() => {
                resolve();
              })
              .catch(error => {
                reject(error);
              });
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            commit('setUser', user.uid);
            const userRef = ref(db, `users/${user.uid}`);
            get(userRef)
              .then(snapshot => {
                const userData = snapshot.val();
                commit('setFirstName', userData.firstName);
                commit('setLastName', userData.lastName);
                console.log(userData.firstName);
              })
              .catch(error => {
                reject(error);
              });
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        signOut(auth)
          .then(() => {
            commit('unsetUser');
            commit('setFirstName', '');
            commit('setLastName', '');
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },

  getters: {
    currentUser: state => state.user,
    userFirstName: state => state.firstName,
    userLastName: state => state.lastName,
    islLoggedIn: state => state.isLoggedIn
  }
});

export default store;
