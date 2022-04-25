<template>
  <div>
    <!-- <headerNav/>
    <headerNavBar/> -->
    <component :is="layoult">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/empty-layout.vue";
import MainLayout from "./layouts/main-layout.vue";
import NonUserLayout from "./layouts/nonUser-layout.vue";
import studientLayout from "./layouts/studient-layout.vue"
// import headerNav from './components/header-nav.vue'
// import headerNavBar from './components/headerNavbar.vue'

export default {
  components: {
    // headerNav,
    // headerNavBar,
    EmptyLayout,
    MainLayout,
    NonUserLayout,
    studientLayout
  },
  computed: {
    layoult() {
      return this.$route.meta.layout || "empty-layout";
    },
  },
  
};
</script>
