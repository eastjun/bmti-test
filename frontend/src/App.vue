<template>
  <v-app>
    <v-app-bar app color="transparent" flat>
      BMTI
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from './components/snackbars/Snackbar'
export default {
  name: 'App',
  components: { Snackbar }
}
</script>
