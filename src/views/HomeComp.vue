<template>
  <div class="home">
    <div class="container">
      <div class="home-content">
        <div>
            <h1>Shop the Latest Trends in Fashion, Phones and Beauty Products</h1>
        <p>Get the hottest styles at affordable prices</p>
        <router-link class="button" to="/products"> Shop Now</router-link>
        </div>
        <div class="image-container">
            <img src="../assets/hero-image.webp" alt="hero-image">
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
};
</script>

<style  scoped>
.home {
  height: 80vh;
}

.container {
  display: flex;
  height: 100%;
  width: 95%;
  margin: 0 auto;
}

.home-content {
  width: 100%;
  display: flex;
}

.image-container {
  /* margin-top: 80px; */
  margin-left: 50px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.home-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #428bca;
  /* font-style: italic; */
  margin-top: 7rem;
}

.home-content p {
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  width: 50%;
  padding-bottom: 2rem;
}

.home-content .button {
  background-color: #428bca;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.home-content .button:hover {
  background-color: #fff;
  color: #428bca;
  border: 2px solid #428bca;
  cursor: pointer;
}
</style>