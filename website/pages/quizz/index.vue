<template lang="">
	<section
		class="is-flex
		is-flex-wrap-wrap
		is-align-items-flex-start
		has-background-link"
	>
		<CardQuizz
			v-for="quizz in allQuizz"
			:key="quizz.id"
			:title="quizz.title"
			:id="quizz.id"
			class="mx-4"
		/>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosResponse } from 'axios'
import axios from 'axios'

@Component
export default class QuizzPage extends Vue {
	allQuizz: any[] = []

  mounted () {
    axios.get('/quizz', {
			baseURL: 'http://my-json-server.typicode.com/Laoup/QuizzOnlineApi'
		}).then((res: AxiosResponse) => {
			console.log("In the answer")
			console.log(res.data)
			this.allQuizz = res.data
		})
  } 

}
</script>