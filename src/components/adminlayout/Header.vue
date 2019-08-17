<template><span>
  <v-app-bar app :color="this.$store.state.adminColor" clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$store.state.adminTitle }}</v-toolbar-title>
    </v-app-bar>
    
  <v-navigation-drawer v-model="drawer" clipped app >
    <v-list dense>
      <v-list-item @click="linkto('order')">
        <v-list-item-action>
          <v-icon>receipt</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Order</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider dark class="my-4" />
      <v-list-item @click="linkto('gooutya')">
        <v-list-item-action>
          <v-icon>logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> 
  
</span></template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    methods: {
      linkto(str) {
        window.location = str;
      }
    }
  }
</script> 
