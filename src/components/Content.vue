<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="">December, 12</p>
      </div>
      <div class="flex flex-wrap justify-between items-center pb-8">
        <div class="flex flex-wrap text-white">
          <div class="pr-10">
            <div class="text-2xl font-bold">45</div>
            <div class="">In Progress</div>
          </div>
          <div class="pr-10">
            <div class="text-2xl font-bold">24</div>
            <div class="">Upcoming</div>
          </div>
          <div>
            <div class="text-2xl font-bold">62</div>
            <div class="">Total Projects</div>
          </div>
        </div>
        <div class="flex items-center mt-4 md:mt-0">
          <button class="text-white bg-transparent" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button class="text-white bg-gray-700 p-2 ml-2" title="Grid View">
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
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <content-container />
    </div>
    <div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <message-board />
    </div>
  </div>
</template>

<script>
import MessageBoard from '../components/contents/MessageBoard.vue';
import ContentContainer from '../components/contents/ContentContainer.vue';

export default {
  name: 'Content',

  components: {
    MessageBoard,
    ContentContainer,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
