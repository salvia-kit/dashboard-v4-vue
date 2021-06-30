<template>
  <ul class="md:pl-3">
    <sidenav-item title="Home" to="/">
      <home-icon />
    </sidenav-item>

    <sidenav-item title="Status" to="/admin/status">
      <status-icon />
    </sidenav-item>

    <sidenav-item title="Archives" to="/admin/archives">
      <archives-icon />
    </sidenav-item>

    <sidenav-item title="Credits" to="/admin/credits">
      <credits-icon />
    </sidenav-item>

    <sidenav-item title="Settings" to="/admin/settings">
      <settings-icon />
    </sidenav-item>

    <sidenav-item title="Documentation" to="/admin/documentation">
      <documentation-icon />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

/* ICONS */
import HomeIcon from './icons/Home.vue';
import StatusIcon from './icons/Status.vue';
import CreditsIcon from './icons/Credits.vue';
import SettingsIcon from './icons/Settings.vue';
import ArchivesIcon from './icons/Archives.vue';
import DocumentationIcon from './icons/Documentation.vue';

export default {
  name: 'SidenavItems',
  components: {
    HomeIcon,
    StatusIcon,
    SidenavItem,
    CreditsIcon,
    SettingsIcon,
    ArchivesIcon,
    DocumentationIcon,
  },
};
</script>
