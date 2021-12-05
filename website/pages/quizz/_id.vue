<template lang="">
	<section class="has-background-link">
		<h4>{{ quizz.title }}</h4>
		<ValidationObserver v-slot="{ handleSubmit }">
			<form @submit.prevent="handleSubmit(onSubmit())">
				<QuestionDisplayer
					v-for="(question, index) in quizz.questions"
					:key="index"
					:objQuestion="question"
					:userAnswer.sync="answers[index]"
				/>
				<div>
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
		this.answers.forEach((answer, index) => {
			if (answer === this.quizz.questions[index].correct_answer)
				score += 1
		})
		this.$axios.post('/addScore', {
			score
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
					]
				}
			})
			this.$router.push('/quizz')
		})
	}
}
</script>