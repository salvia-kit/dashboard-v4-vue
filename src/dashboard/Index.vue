<template>
  <dashboard-provider>
    <div class="bg-gray-900 h-screen overflow-hidden relative">
      <div class="flex items-start">
        <Overlay />
        <side-navigation mobile-position="right" />
        <div class="flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4">
          <TopNavigation />
          <main
            class="
              h-screen
              overflow-auto
              pb-36
              pt-4
              px-2
              md:pb-8 md:pt-4
              lg:pt-0 lg:px-4
            "
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </dashboard-provider>
</template>

<script>
import Overlay from './provider/Overlay.vue';
import TopNavigation from './topnavigation/Index.vue';
import SideNavigation from './sidenavigation/Index.vue';
import DashboardProvider from './provider/Provider.vue';

export default {
  name: 'DashboardLayout',
  components: { DashboardProvider, Overlay, SideNavigation, TopNavigation },
};
</script>
