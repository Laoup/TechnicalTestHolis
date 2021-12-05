<template lang="">
  <div
    class="box"
    @click="redirectQuizz"
  >
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import { AxiosResponse } from 'axios'

@Component
export default class CardQuizz extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: true }) id!: number

  redirectQuizz () {
    this.$router.push(`/quizz/${this.id}`)
  }

  // mounted () {
  //   this.$axios.get('/quizz', { baseURL: 'my-json-server.typicode.com/user/repo' })
  // } 

}
</script>
