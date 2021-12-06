<template lang="">
  <section class="has-text-centered is-flex is-justify-content-center is-flex-direction-column">
    <h1 class="title is-2 has-text-white">Pour commencer à jouer connecter vous ou inscrivez vous !</h1>
    <div class="is-flex is-justify-content-space-evenly mx-6 mt-4">
      <b-button @click="subscribe">
        Inscription
      </b-button>
      <b-button @click="connect">
        Connexion
      </b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ModalConnexion from '~/components/modalConnexion.vue'
import ModalInscription from '~/components/modalInscription.vue'

@Component
export default class HomePage extends Vue {
  connect () {
    console.log('connect')
    this.$buefy.modal.open({
      parent: this,
      component: ModalConnexion,
      trapFocus: true
    })
  }

  subscribe () {
    console.log('subscribe')
    this.$buefy.modal.open({
      parent: this,
      component: ModalInscription,
      trapFocus: true
    })
  }
}
</script>
