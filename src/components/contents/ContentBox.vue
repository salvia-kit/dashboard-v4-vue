<template>
  <div class="w-full md:w-4/12">
    <div class="p-2">
      <div class="p-4 rounded-3xl" :class="item.style.background">
        <div class="flex items-center justify-b">
          <span class="text-sm">{{ item.info.date }}</span>
        </div>
        <div class="text-center mb-4 mt-5">
          <p class="text-base font-bold opacity-70">{{ item.info.title }}</p>
          <p class="text-sm opacity-70 mt-2">{{ item.info.subtitle }}</p>
        </div>
        <div>
          <p class="text-sm font-bold m-0">Progress</p>
          <div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
            <span
              class="block h-1 rounded-md"
              :style="{ width: item.info.progress }"
              :class="[item.style.progressbar]"
            />
          </div>
          <p class="text-right m-0 text-sm font-bold">
            {{ item.info.progress }}
          </p>
        </div>
        <div class="flex justify-between pt-4 relative">
          <div class="flex items-center">
            <img
              v-for="user in item.info.participants"
              :key="user.id"
              class="w-5 h-5 rounded-full overflow-hidden object-cover"
              :src="user.image"
              alt="participant"
            />
            <button
              class="
                w-5
                h-5
                rounded-full
                border-none
                ml-3
                p-0
                flex
                justify-center
                items-center
                bg-white
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div
            class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold"
            :class="item.style.text"
          >
            {{ item.info.timeLeft }}
          </div>
        </div>
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
        style: {
          background: 'bg-yellow-200',
          progressbar: 'bg-yellow-700',
          text: 'text-yellow-600',
        },
        info: {
          date: 'December 10, 2020',
          title: 'Web Designing',
          subtitle: 'Prototyping',
          progress: '90%',
          timeLeft: '2 Days Left',
          participants: [
            {
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            },
          ],
        },
      };
    },
  },
});
</script>
