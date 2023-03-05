<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products" v-if="isLoggedIn">Products</router-link>
      <div v-if="isLoggedIn">
        <span>Welcome, {{ currentUser }}</span>
        <button @click="logout">Logout</button>
      </div>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link to="/signup" v-if="!isLoggedIn">Signup</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>
