<template>
  <div class="flex flex-wrap">
    <content-box v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ContentBox from './ContentBox.vue';

export default {
  name: 'ContentContainer',

  components: {
    ContentBox,
  },

  data() {
    return {
      data: [
        {
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
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
        {
          style: {
            background: 'bg-gray-200',
            progressbar: 'bg-indigo-700',
            text: 'text-indigo-600',
          },
          info: {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subtitle: 'Prototyping',
            progress: '60%',
            progressClass: 'w-7/12',
            timeLeft: '2 Days Left',
            participants: [
              {
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
        {
          style: {
            background: 'bg-green-200',
            progressbar: 'bg-green-700',
            text: 'text-green-600',
          },
          info: {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subtitle: 'Prototyping',
            progress: '60%',
            progressClass: 'w-7/12',
            timeLeft: '2 Days Left',
            participants: [
              {
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
        {
          style: {
            background: 'bg-blue-200',
            progressbar: 'bg-blue-700',
            text: 'text-blue-600',
          },
          info: {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subtitle: 'Prototyping',
            progress: '15%',
            progressClass: 'w-2/12',
            timeLeft: '2 Days Left',
            participants: [
              {
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
        {
          style: {
            background: 'bg-red-200',
            progressbar: 'bg-red-700',
            text: 'text-red-600',
          },
          info: {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subtitle: 'Prototyping',
            progress: '80%',
            progressClass: 'w-10/12',
            timeLeft: '2 Days Left',
            participants: [
              {
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
        {
          style: {
            background: 'bg-purple-200',
            progressbar: 'bg-purple-700',
            text: 'text-purple-600',
          },
          info: {
            date: 'December 10, 2020',
            title: 'Web Designing',
            subtitle: 'Prototyping',
            progress: '60%',
            progressClass: 'w-6/12',
            timeLeft: '2 Days Left',
            participants: [
              {
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
