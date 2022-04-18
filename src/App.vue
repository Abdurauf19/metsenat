<template >
  <div>
    <headerNav/>
    <headerNavBar/>
    <navModal/>
    <router-view/>
  </div>
</template>


<script>
import headerNav from './components/header-nav.vue'
import headerNavBar from './components/headerNavbar.vue'

export default {
  components: {
    headerNav,
    headerNavBar,
   
  },
  computed: {
    layoult() {
      console.log(this.$route);
    }
  }
}
</script>