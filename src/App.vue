<template>
  <div>
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

export default {
  components: {
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
