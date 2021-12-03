<template lang="">
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit())">
			<FieldInput
				v-model="email"
				label="Email"
				placeholder="Votre email..."
				rules="required|email"
			/>
			<FieldInput
				v-model="password"
				label="Password"
				rules="required"
			/>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ModalConnexion extends Vue {
	email: string = ''
	password: string = ''

	onSubmit () {
		const { email, password } = this

		this.$axios.post('/sign-in', {
			email, password
		}).then(() => {
			this.$router.push('/quizz')
		}).catch(e => {
			console.log(e)
		})

	}
}
</script>
