<template>
  <v-sheet color="primary" height="100vh" class="d-flex align-center">
    <div class="px-8">
      <v-sheet color="primary" dark>
        <v-img :src="require('@/assets/elements/새우배달이.png')" width="250" class="absolute shrimp-baedal-image" />
        <div class="mb-2">최고의 먹궁합을 찾아라!</div>
        <div class="font-hanna text-h1 relative">
          BM <br />
          MBTI
          <v-img :src="require('@/assets/elements/x.png')" class="absolute bottom-10 left-0" />
        </div>
        <div class="text-h5 mt-6 mb-8">
          나를 알고 <br />
          너를 알면 <br />
          우린 <br />
          먹메이트!
        </div>
      </v-sheet>
      <v-btn to="/bmti" x-large color="white" class="rounded-xl">내 BMTI 확인하기</v-btn>
      <v-img :src="require('@/assets/elements/냥이_손.png')" width="200" class="absolute cat-hand-image" />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'ServiceIntroducePage'
}
</script>

<style scoped>
.shrimp-baedal-image {
  top: 20px;
  right: -60px;
}

.cat-hand-image {
  bottom: -50px;
  right: 20px;
  transform: rotate(90deg);
}
</style>
