<template>
  <div>
    <button @click="Logout">Logout</button>
  </div>
</template>


<script>
export default {
  name: 'LogOut',
  methods: {
    logout() {
      this.$store.dispatch('logOut');
      this.$router.push('/login');
    }
  }
}
</script>
