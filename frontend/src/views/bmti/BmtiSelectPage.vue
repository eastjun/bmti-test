<template>
  <v-sheet color="primary" height="100vh" class="px-6 py-12 relative">
    <img :src="require('@/assets/elements/냥이_손.png')" width="150" class="absolute cat-hand-image" />
    <v-sheet color="transparent" dark>
      <h1 class="text-h2 relative">
        BM <br />
        MBTI 엿보기
        <v-img :src="require('@/assets/elements/x.png')" width="100" class="absolute bottom-0" />
      </h1>
      <h5 class="text-h5 mt-4">
        나를 알고 너를 알면 <br />
        우린 환상의 먹메이트!
      </h5>
    </v-sheet>
    <v-sheet color="transparent">
      <v-card color="white" class="rounded-xl pa-6 mt-6">
        <h6 class="text-h6 font-hanna-air text-grey">아는만큼 먹는다</h6>
        <h3 class="text-h3">미슐랭이세요</h3>
        <h6 class="text-h6 font-hanna-air text-grey mt-3">
          뭐든 분석부터 하고보는 당신, <br />
          깐깐한 게 아니라 꼼.꼼.한 거라구~
        </h6>

        <div>

        </div>
      </v-card>
    </v-sheet>
    <!--    <div class="px-8">-->
    <!--      <v-sheet color="primary" dark>-->
    <!--        <v-img :src="require('@/assets/elements/새우배달이.png')" width="250" class="absolute shrimp-baedal-image" />-->
    <!--        <div class="mb-2">최고의 먹궁합을 찾아라!</div>-->
    <!--        <div class="font-hanna text-h1 relative">-->
    <!--              BM <br />-->
    <!--              MBTI 엿보기-->
    <!--          <v-img :src="require('@/assets/elements/냥이_손.png')" class="absolute bottom-10 left-0" />-->
    <!--        </div>-->
    <!--        <div class="text-h5 mt-6 mb-8">-->
    <!--          나를 알고 <br />-->
    <!--          너를 알면 <br />-->
    <!--          우린 <br />-->
    <!--          먹메이트!-->
    <!--        </div>-->
    <!--      </v-sheet>-->
    <!--      <v-btn to="/bmti" x-large color="white" class="rounded-xl">내 BMTI 확인하기</v-btn>-->
    <!--      <v-img :src="require('@/assets/elements/냥이_손.png')" width="200" class="absolute cat-hand-image" />-->
    <!--    </div>-->
  </v-sheet>
</template>

<script>
export default {
  name: 'BmtiSelectPage',
  data() {
    return {
      types: []
    }
  }
}
</script>

<style scoped>
.shrimp-baedal-image {
  top: 20px;
  right: -60px;
}

.cat-hand-image {
  right: -40px;
  top: -40px;
  transform: rotate(-20deg);
}
</style>
