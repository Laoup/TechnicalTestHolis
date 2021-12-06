<template lang="">
	<article class="py-5 px-4">
		<h3 class="title is-5 mb-4 has-text-white">Choisissez un thème:</h3>
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
				class="mx-4 has-cursor-pointer has-hover"
			/>
		</section>
		<section class="has-text-white">
			<div>
				<h6>Vos scores précédents</h6>
			</div>
			<TabScore />
		</section>
	</article>
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