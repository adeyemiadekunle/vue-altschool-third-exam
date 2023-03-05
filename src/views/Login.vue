<!-- Login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Email:
        <input type="email" v-model="email" />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      await this.login({ email: this.email, password: this.password })
      this.$router.push('/products')
    }
  }
}
</script>
