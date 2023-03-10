<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view />
   </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import NavBar from "../components/NavBarComp.vue";
import Footer from "../components/FooterComp.vue";
export default {
  name: "DashboardComp",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style  scoped>


</style>