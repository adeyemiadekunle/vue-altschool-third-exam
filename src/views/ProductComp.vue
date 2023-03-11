<template>
  <div class="product">
    <div class="product-container">
      
      <div class="product-content">
        <div class="image-content">
          <img :src="product.thumbnail" alt="product image" />
        </div>
        <div class="product-details-content">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p>{{ product.rating }}</p>
          <div class="price">
            <span class="currency">$</span>
            <span class="value">{{ product.price }}</span>
            <span class="discount">{{ product.discountPercentage }}</span>
          </div>

          <button>Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>



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
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.product-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  background: white;
  height: 500px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 2rem;
}

.image-content {
  width: 50%;
  margin-left: 2rem;
  display: flex;
  flex-direction: colume;
  justify-content: center;
 }

.image-content img {
  width: 300px;
  max-height: 300px;
  object-fit: cover;
}

.product-details-content {
  width: 50%;
  margin-right: 2rem;
}

.price {
  display: flex;
  align-items: center;
}

.currency {
  font-size: 1.5rem;
  font-weight: 600;
}

.value {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 5px;
}

.discount {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 5px;
  color: red;
}

button {
  padding: 10px 100px;
  height: 50px;
  background-color: #428bca;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #fff;
  color: #428bca;
  border: 2px solid #428bca;
  cursor: pointer;
}
</style>