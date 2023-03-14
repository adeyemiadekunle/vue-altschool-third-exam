import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useCurrentUser() {
  const store = useStore();

  const currentUserFirstName = computed(() => {
    return store.getters.userFirstName;
  });

  const currentUserLastName = computed(() => {
    return store.getters.userLastName;
  });

  return {
    currentUserFirstName,
    currentUserLastName
  };
}
