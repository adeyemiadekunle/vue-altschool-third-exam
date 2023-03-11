<template>
  <h1 class="products-heading">Products List</h1>

  <div class="products-container">
    <div v-if="loading">Loading...</div>

    <!-- the product card -->
    <div v-else v-for="product in products" :key="product.id">
      <div class="product-card">
        <div class="image-container">
          <img :src="product.images[0]" alt="Product Image" />
        </div>
        <div class="product-details">
          <h4>{{ product.title }}</h4>
          <p>{{ product.description }}</p>
          <div class="price">
            <span class="currency">$</span>
            <span class="value">{{ product.price }}</span>
          </div>
        </div>
        <div class="button-container">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProducts } from "../composable/useProducts";

export default {
  setup() {
    const { products, loading } = useProducts("https://dummyjson.com/products");
    return {
      products,
      loading,
    };
  },
};
</script>

<style scoped >
.products-heading {
  text-align: center;
  margin-top: 2rem;
}


.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  height: 400px;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.product-card:hover {
  box-shadow: 0 0 15px #ccc;
}

.image-container {
  width: 100%;
  height: 300px;
}

img {
  width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-details {
  height: 100px;
  width: 300px;
  text-align: left;
}

h4 {
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

p {
  margin: 0;
  padding-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.price {
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

.currency {
  font-weight: bold;
}

.value {
  margin-left: 0.5rem;
  font-weight: bold;
}

button {
  background-color: #428bca;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.button-container {
  position: absolute;
  /* bottom: 0; */
  right: 0;
  /* left: 0; */
  /* top: 0; */
  margin: 0.5rem;
  display: none;
  z-index: 2;
  transition: all 0.3s ease-in-out;
}

.product-card:hover .button-container {
  display: block;

}
</style>
