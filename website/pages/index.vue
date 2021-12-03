<template>
  <section>
    <h1>Pour commencer à jouer connecter vous ou inscrivez vous !</h1>
    <b-button @onClick="subscribe">
      Inscription
    </b-button>
    <b-button @onClick="connect">
      Connexion
    </b-button>
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class HomePage extends Vue {
  connect () {
    this.$buefy.modal.open()
  }

  subscribe () {
    this.$buefy.modal.open()
  }
}
</script>
