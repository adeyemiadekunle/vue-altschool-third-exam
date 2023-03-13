<!-- Login.vue -->
<template>
  <div class="login">
    <div class="login-container">
      <div class="form-content">
        <div class="form-header">
          <h1>Login</h1>
        </div>
        <div class="form-body">
          <form @submit.prevent="handleSubmit">
            <label> Email </label>
            <input type="email" id="email" v-model="email" />
            <label> Password </label>
            <input type="password" id="password" v-model="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div class="noexisting-account-login">
        <div>
          <p>Don't have an account?</p>
          <router-link to="/signup" class="button">Create An Account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
     async handleSubmit() {
      this.$store
        .dispatch("logIn", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/products");
          console.log('success');
          console.log(this.$store.state.user);
          // console.log(this.$store.state.firstName);
          // console.log(this.$store.state.lastName);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* margin-top: 50px; */
}
.login-container {
  width: 95%;
  margin: 0 auto;
}

.login-container .form-content {
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
  width: 90%;
  /* margin: 0 auto; */
}

.form-body form {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}

.form-body form label {
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-body form input {
  padding: 10px;
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

.noexisting-account-login {
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

.noexisting-account-login div {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.noexisting-account-login p {
  margin-bottom: 10px;
}

.noexisting-account-login .button {
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

.noexisting-account-login .button:hover {
  background: blue;
  color: white;
}
</style>