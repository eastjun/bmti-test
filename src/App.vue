<template>
  <v-app>
    <v-sheet>
      <!--    <v-sheet :color="isPrimaryBackground ? 'primary' : 'white'" height="100vh">-->
      <!--      <v-app-bar app color="transparent" flat>-->
      <!--        <div class="text-center w-100">개척자 타입방</div>-->
      <!--      </v-app-bar>-->
      <v-main>
        <router-view />
      </v-main>
      <Snackbar />
    </v-sheet>
  </v-app>
</template>

<script>
import Snackbar from './components/snackbars/Snackbar'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { Snackbar },
  computed: {
    ...mapGetters(['isPrimaryBackground'])
  }
}
</script>
