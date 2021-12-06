<template lang="">
	<section>
		<div
			v-for="score in tabScore"
			:key="score.id"
		>
			<p>Quizz: {{ score.quizzTitle }} = {{score.score}} sur 3 point(s)</p>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosResponse } from 'axios'

@Component
export default class TabScore extends Vue {
	tabScore: any = []

	mounted () {
		this.$axios.get('/getScore', { withCredentials: true })
		.then((res: AxiosResponse) => {
			this.tabScore = res.data
		})
	}

}
</script>