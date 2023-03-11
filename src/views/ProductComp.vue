<template>
  <div class="product">
    <div class="product-container">
        <div class="product-content">
            <div class="image-content">
                <img :src="product.thumbnail" alt="product image">
            </div>
            <div product-details-content>
                <h1>{{ product.title }}</h1>
                <p> {{product.description}} </p>
            </div>
        </div>
    </div>
    <div class="product-heading">
      <h1>Product</h1>
    </div>
    
  </div>
</template>

<!-- <div>
      <h1>{{ product.title }}</h1>
      <p> {{product.description}} </p>
    </div> -->

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const product = ref([]);
    // we don't have access to this in the composition API so lets use a hook
    const route = useRoute();
    const fetchProduct = () => {
      const { productId } = route.params;
      const endpoint = `https://dummyjson.com/products/${productId}`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (product.value = json));
    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      product,
    };
  },
};
</script>

<style  scoped>
</style>