<template>
  <div>
    <div
      class="
        border-t
        solid
        border-gray-700
        p-4
        flex
        2xl:items-start
        w-full
        hover:bg-gray-700
      "
    >
      <img
        :src="item.image"
        alt="profile image"
        class="object-cover w-10 h-10 rounded-full"
      />
      <div class="pl-4 w-full">
        <div class="flex items-center justify-between w-full">
          <div class="text-white font-medium">{{ item.name }}</div>
          <div class="flex justify-center items-center cursor-pointer h-7 w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </div>
        </div>
        <p class="my-2 text-sm text-gray-400">
          {{ item.text }}
        </p>
        <p class="text-right text-gray-400 text-sm">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  item: {
    type: Object,
    default: function () {
      return {
        name: 'Stephanie',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
        text: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
        date: 'Dec, 12',
      };
    },
  },
});
</script>
