<template lang="">
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit())">
      <div class="modal-card has-background-white mx-auto">
        <div class="modal-card-head has-background-primary" />
        <div class="modal-card-body">
          <div class="columns">
            <div class="column is-10 mx-auto">
              <FieldInput
                v-model="firstName"
                label="Prénom"
                placeholder="Votre prénom..."
                rules="required"
              />
              <FieldInput
                v-model="lastName"
                label="Nom"
                placeholder="Votre nom..."
                rules="required"
              />
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
import ModalMessage from './modalMessage.vue'

@Component({ components: { ValidationObserver } })
export default class ModalInscription extends Vue {
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: string = ''

  onSubmit () {
    const { firstName, lastName, email, password } = this
    this.$axios.post('/sign-up', {
      firstName, lastName, email, password
    }).then(() => {
      this.$emit('close')
      this.$buefy.modal.open({
        parent: this,
        component: ModalMessage,
        trapFocus: true,
        canCancel: [],
        props: {
          messages: [
            'Vous avez bien été inscrit.',
            'Vous allez être redirigé vers la page d\'accueil dans quelques instants...'
          ],
          icon: 'check-circle'
        }
      })
    }).catch(() => {
      this.$emit('close')
      this.$buefy.modal.open({
        parent: this,
        component: ModalMessage,
        trapFocus: true,
        props: {
          messages: [
            "Quelque chose ne s'est pas déroulé correctement",
            "Veuillez prendre contact avec l'administrateur du site et lui faire part du problème."
          ],
          icon: 'close-circle',
          iconType: 'is-danger'
        }
      })
    })
  }
}
</script>
