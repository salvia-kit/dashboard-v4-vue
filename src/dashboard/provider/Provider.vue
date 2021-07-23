<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { provide, ref, readonly, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'DashboardProvider',
  setup() {
    const open = ref(false);
    const route = useRoute();

    const toggle = () => {
      open.value = !open.value;
    };

    // close side navigation when you click on a sidenav item.
    // set the html tag overflow to hidden.
    const closeOnRouteChange = () => {
      if (open.value === true) {
        open.value = false;
        document.documentElement.style.overflow = 'hidden';
      }
    };

    // close sidenav when route changes
    watch(route, () => {
      closeOnRouteChange();
    });

    provide('open', readonly(open));
    provide('toggle', toggle);
  },
};
</script>
