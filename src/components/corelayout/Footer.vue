<template>
<v-footer dark padless>
    <v-card class="flex" flat tile >
      <v-card-title class="teal">
        <strong class="subheading">Telp / Wa : 085231538298</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        @{{ new Date().getFullYear() }}
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-instagram',
      ],
    }
  }
}
</script>
