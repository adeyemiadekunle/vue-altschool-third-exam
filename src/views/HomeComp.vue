<template>
  <div class="home">
    <div class="container">
      <div class="home-content">
        <h1>Your Latest Bloq</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, enim voluptate? Sed, ab saepe deleniti enim beatae modi
          nisi unde!
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.home {
  /* width: 100%;   */
  height: 80vh;
  /* background: url("../assets/images/home-bg.jpg") no-repeat center center/cover; */

}

.container {
  display: flex;
  height: 100%;
  width: 95%;
  margin: 0 auto;
}

.home-content {
  width: 100%;
}

.home-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #b8118e;
  font-style: italic;
  margin-top: 7rem;
}

.home-content p {
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  width: 50%;
  /* font-style: italic; */
}

.home-content button {
  background-color: #b8118e;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.home-content button:hover {
  background-color: #000;
  color: #fff;
}



</style>