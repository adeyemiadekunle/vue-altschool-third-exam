import { ref, onMounted } from "vue";

export function useProducts(url) {
  const products = ref([]);
  const loading = ref(true);

  const fetchProducts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => (products.value = response.products))
      .finally(() => (loading.value = false));
  };
  onMounted(() => {
    fetchProducts();
  });

  return {
    products,
    loading
  };
}
