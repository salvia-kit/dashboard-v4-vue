<template>
  <aside
    class="
      scrollbar
      h-screen
      overflow-y-auto
      text-white
      top-0
      lg:absolute
      bg-gray-900
      lg:block lg:z-40
    "
    :class="[
      style[mobilePosition],
      open
        ? 'absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64'
        : 'duration-700 ease-out hidden transition-all lg:w-24',
    ]"
  >
    <div class="pb-32 lg:pb-12">
      <sidenav-header />
      <sidenav-items />
    </div>
  </aside>
</template>

<script setup>
import { inject, defineProps } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

defineProps({
  mobilePosition: {
    type: String,
    default: '',
  },
});

const open = inject('open');

const style = {
  left: 'left-0 ',
  right: 'right-0 lg:left-0',
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.scrollbar {
  -ms-overflow-style: none; /* make scrollbar transparent on Firefox, IE and Edge*/
  scrollbar-width: none;
}
</style>
