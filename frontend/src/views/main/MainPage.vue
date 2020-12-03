<template>
  <v-sheet height="100vh">
    <v-toolbar color="#313131" class="w-100" flat dark>
      <v-toolbar-title class="w-100">
        <div class="w-100 text-center">
          뭐먹지
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-sheet color="#313131" class="px-6 pt-8 pb-12" dark>
      <div class="max-width-sm d-flex">
        <h3 class="text-h3">
          오늘은 <br />
          떡볶이 <br />
          어때요
        </h3>
        <img width="auto" height="150" class="ml-7" :src="require('@/assets/elements/떡볶1.png')" />
      </div>
    </v-sheet>
    <v-sheet color="#adadad" class="pl-6 pt-8 pr-0">
      <div class="max-width-sm relative pb-12">
        <div class="d-flex relative">
          <v-sheet color="transparent" dark>
            <h4 class="text-h4">
              뭐 먹지보다 중요한
            </h4>
            <h3 class="text-h3">
              누구랑 먹지?
            </h3>
          </v-sheet>
        </div>
        <v-btn class="mt-4" large rounded color="#4E4E4E" dark>같이 먹을 사람 찾기</v-btn>
        <img width="auto" height="130" class="absolute right-0 bottom-0" :src="require('@/assets/elements/1_흐물.png')" />
      </div>
    </v-sheet>
    <div class="max-width-sm d-flex justify-center">
      <img width="100%" :src="require('@/assets/elements/떡볶이2.png')" />
      <img width="100%" class="footer" :src="require('@/assets/elements/footer.png')" />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
.footer {
  max-width: 600px;
  position: fixed;
  bottom: 0;
}
</style>
