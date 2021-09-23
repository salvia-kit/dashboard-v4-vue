<template>
  <slot />
</template>

<script setup>
import { provide, ref, readonly, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const open = ref(false);
const route = useRoute();

const toggle = () => {
  open.value = !open.value;
};

// set the html tag style overflow to hidden.
onMounted(() => {
  document.documentElement.style.overflow = 'hidden';
});

// close side navigation when you click on a sidenav item or when route changes.
watch(route, () => {
  if (open.value) {
    open.value = false;
  }
});

provide('open', readonly(open));
provide('toggle', toggle);
</script>
