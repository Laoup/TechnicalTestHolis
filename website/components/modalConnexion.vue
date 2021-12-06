<template lang="">
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit())">
			<div class="modal-card has-background-white mx-auto">
        <div class="modal-card-head has-background-primary" />
        <div class="modal-card-body">
          <div class="columns">
            <div class="column is-10 mx-auto">
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
								type="password"
							/>
						</div>
					</div>
				</div>
				<div class="modal-card-footer has-background-primary has-text-centered py-2">
          <b-button
            native-type="submit"
            type="is-success is-light"
            rounded
          >
            Valider
          </b-button>
        </div>
			</div>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'

@Component({ components: { ValidationObserver } })
export default class ModalConnexion extends Vue {
	email: string = ''
	password: string = ''

	onSubmit () {
		const { email, password } = this

		this.$axios.post('/sign-in', {
			email, password
		}, { withCredentials: true }).then(() => {
			this.$router.push('/quizz')
			this.$emit('close')
		}).catch(e => {
			console.log(e)
		})

	}
}
</script>
