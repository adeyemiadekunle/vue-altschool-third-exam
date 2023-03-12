<!-- Signup.vue -->
<template>
  <div class="signup">
    <div class="signup-container">
      <div class="form-content">
        <div class="form-header">
          <h1>Create An Account</h1>
        </div>
        <div class="form-body">
          <form @submit.prevent="signup">
            <label> First Name </label>
            <input type="text" v-model="firstname" />
            <label> Last Name </label>
            <input type="text" v-model="lastname" />
            <label> Email </label>
            <input type="email" v-model="email" />
            <label> Password </label>
            <input type="password" v-model="password" />
            <button type="submit">Create An Account</button>
          </form>
        </div>
      </div>
      <div class="existing-account-login">
        <div>
          <p>Already have an account?</p>
          <router-link to="/login" class="button">Login</router-link>
        </div>
      </div>
    </div>
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
};
</script>

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
}

.signup-container {
  width: 95%;
  margin: 0 auto;
}

.signup-container .form-content {
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border-radius: 5px;
}

.form-header {
  text-align: center;
  width: 90%;
}

.form-body {
  /* border: 1px solid blue; */
  width: 90%;
  /* padding: 20px; */
}

.form-body form {
  display: flex;
  flex-direction: column;
}

.form-body form label {
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-body form input {
  padding: 10px;
  /* width: 100%; */
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-body form button {
  padding: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.form-body form button:hover {
  opacity: 0.9;
}

.existing-account-login {
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  height: 100%;
  background: rgb(230, 224, 224);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
}

.existing-account-login div {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.existing-account-login p {
  margin-bottom: 10px;
}

.existing-account-login .button {
  padding-top: 10px;
  padding-bottom: 10px;
  /* background: green; */
  color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  border: 1px solid blue;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}


.existing-account-login .button:hover {
  background: blue;
  color: white;
}
</style>