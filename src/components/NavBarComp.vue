<template>
  <div class="header">
    <div class="nav-container">
      <div class="logo_container">
        <router-link to="/" class="logo">AltStore</router-link>
      </div>
      <nav class="nav-items">
        <div class="nav-item">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <a v-if="isLoggedIn" class="name" > Welcome {{currentUserFirstName}} {{currentUserLastName}} </a>
          <a v-if="isLoggedIn" @click="logout">Logout</a>
          <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
          <router-link v-if="!isLoggedIn" to="/signup">Signup</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import useCurrentUser from '@/composables/userCurrentUser';
export default {
  name: "NavBarComp",

  setup() {
    const { currentUserFirstName, currentUserLastName } = useCurrentUser();

    return {
      currentUserFirstName,
      currentUserLastName
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },

  methods: {
    logout() {
      this.$store
        .dispatch("logOut")
        .then(() => {
          alert("You have successfully logged out");
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error);
          alert("Something went wrong");
        });
    },
  },
};
</script>


<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  background-color: #f5f5f5;
}

.logo_container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  /* height: 100%; */
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  color: #428bca;
  /* font-style: italic; */
  text-decoration: none;
}

.nav-container {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.nav-items {
  display: flex;
  align-items: center;
}

.nav-item,
.other-nav-item {
  display: flex;
}

.nav-items a {
  margin-left: 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  transition: all 0.3s ease-in-out;
}

.nav-items a:hover {
  background: black;
  color: white;
}

.name {
  color: red !important;
}
</style>