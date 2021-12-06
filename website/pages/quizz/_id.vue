<template lang="">
	<section class="has-background-link px-6 py-4">
		<h4 class="title is-5 has-text-white has-text-centered">Quizz: {{ quizz.title }}</h4>
		<ValidationObserver v-slot="{ handleSubmit }">
			<form @submit.prevent="handleSubmit(onSubmit())">
				<QuestionDisplayer
					v-for="(question, index) in quizz.questions"
					:key="index"
					:objQuestion="question"
					:userAnswer.sync="answers[index]"
					class="mb-3"
				/>
				<div class="has-text-centered">
					<b-button
						native-type="submit"
            type="is-success is-light"
            rounded
					>
						Valider les réponses !
					</b-button>
				</div>
			</form>
		</ValidationObserver>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import { AxiosResponse } from 'axios'
import axios from 'axios'
import ModalMessage from '../../components/modalMessage.vue'

@Component({ components: { ValidationObserver } })
export default class QuizzGamePage extends Vue {
	quizz: any = ''

	answers: string[] = ['', '', '']

	mounted () {
		const id = this.$route.params.id
		axios.get(`/quizz/${id}`, {
			baseURL: 'http://my-json-server.typicode.com/Laoup/QuizzOnlineApi'
		}).then((res: AxiosResponse) => {
			this.quizz = res.data
		})
	}

	onSubmit () {
		let score: number = 0
		const quizzTitle: string = this.quizz.title
		this.answers.forEach((answer, index) => {
			if (answer === this.quizz.questions[index].correct_answer)
				score += 1
		})
		this.$axios.post('/addScore', {
			score,
			quizzTitle
		}, {
			withCredentials: true
		}).then(() => {
			this.$buefy.modal.open({
				parent: this,
				component: ModalMessage,
				trapFocus: true,
				canCancel: [],
				props: {
					messages: [
						"Merci d'avoir joué !",
						`Votre score est de ${score} / 3 bonnes réponses.`,
						'',
						'Vous allez ếtre redirigé vers le menu des quizz dans quelques instants.'
					],
					waitingTime: 6000
				}
			})
			this.$router.push('/quizz')
		})
	}
}
</script>