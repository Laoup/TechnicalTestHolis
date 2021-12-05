<template lang="">
  <section>
    <h1>Pour commencer à jouer connecter vous ou inscrivez vous !</h1>
    <b-button @click="subscribe">
      Inscription
    </b-button>
    <b-button @click="connect">
      Connexion
    </b-button>
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
