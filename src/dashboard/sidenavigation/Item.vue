<template>
  <li>
    <router-link :to="to">
      <div
        class="flex items-center justify-start my-1 p-3 w-full hover:text-white"
      >
        <div
          :class="route.path === to && 'bg-gray-700 rounded-full'"
          class="p-2"
        >
          <span><slot /></span>
        </div>
        <span
          class="mx-4 text-sm"
          :class="
            open
              ? 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto'
              : 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all'
          "
        >
          {{ title }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import { inject, defineProps } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});

const route = useRoute();
const open = inject('open');
</script>
