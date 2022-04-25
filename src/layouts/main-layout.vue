<template >
  <div>
   <headerNav/>
    <headerNavBar/>
    <router-view/>
  </div>
  
</template>

<script>
import headerNav from '../components/header-nav.vue'
import headerNavBar from '../components/headerNavbar.vue'
export default {
  components: {
         headerNav,
    headerNavBar
  }
}
</script>

