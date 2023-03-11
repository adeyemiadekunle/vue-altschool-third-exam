<!-- Signup.vue -->
<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <label>
        Name:
        <input type="text" v-model="name" />
      </label>
      <label>
        Email:
        <input type="email" v-model="email" />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" />
      </label>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
//   data() {
//     return {
//       name: '',
//       email: '',
//       password: ''
//     }
//   },
//   methods: {
//     ...mapActions(['signup']),
//     async signup() {
//       await this.signup({ name: this.name, email: this.email, password: this.password })
//       this.$router.push('/login')
//     }
//   }
}
</script>