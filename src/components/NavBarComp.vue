<template>
  <div class="header">
    <div class="nav-container">
      <div class="logo_container">
        <h3 class="logo">AltShop</h3>
      </div>
      <nav class="nav-items">
        <div class="nav-item">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
        </div>

        <div class="other-nav-item">
          <!-- <div v-if="isLoggedIn">
            <span>Welcome, {{ currentUser }}</span>
          
            
          </div> -->
          <button @click="logout">Logout</button>
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarComp",

  // computed: {
  //   isLoggedIn() {
  //     return this.$store.getters.isLoggedIn;
  //   },
  //   currentUser() {
  //     return this.$store.getters.currentUser;
  //   }
  // },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
      this.$router.push("/login");
      
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
  font-style: italic;
}

.nav-container {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
}
</style>