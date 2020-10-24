<template>
  <v-app>

      <router-view ></router-view>
   
  </v-app>
</template>

<script>
import Index from './components/Index';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    // id:''
  }),
 
};
</script>
