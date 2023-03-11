<template>
  <div class="products">
    <div class="container">
      <h2>Products List</h2>
      <!-- <div class="product-list">
        <div class="product-item" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" alt="" />
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style  scoped>

.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}

.container {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
</style>