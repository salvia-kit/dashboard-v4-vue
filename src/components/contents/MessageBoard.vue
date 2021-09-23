<template>
  <div class="bg-gray-800 rounded-3xl px-6 pt-6">
    <div class="flex text-white text-2xl pb-6 font-bold">
      <p>Client Messages</p>
    </div>
    <message v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import Message from './Message.vue';

const data = [
  {
    name: 'Stephanie',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    text: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
    date: 'Dec, 12',
  },
  {
    name: 'Mark',
    image:
      'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    text: "Hey, can tell me about progress of project? I'm waiting for your response.",
    date: 'Dec, 12',
  },
  {
    name: 'David',
    image:
      'https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    text: "Hey, can tell me about progress of project? I'm waiting for your response.",
    date: 'Dec, 12',
  },
  {
    name: 'Mark',
    image:
      'https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    text: "I am really impressed! Can't wait to see the final result.",
    date: 'Dec, 12',
  },
];
</script>
