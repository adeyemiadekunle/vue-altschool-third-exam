
import { createStore } from "vuex";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, ref, set, db, get  } from "../firebaseConfig"

const store = createStore({
  state: {
    user: null,
    firstName: '',
    lastName: '',
    },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setFirstName(state, firstName) {
      state.firstName = firstName;
    },
    setLastName(state, lastName) {
      state.lastName = lastName;
    },
    
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
            commit('setUser', null);
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
  }
});

export default store;
