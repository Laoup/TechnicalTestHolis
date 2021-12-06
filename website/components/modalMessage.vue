<template lang="">
  <div class="modal-card has-background-white has-text-centered mx-auto">
    <div class="modal-card-head has-background-primary"></div>
    <div class="modal-card-body">
      <p v-for="message in messages" :key="message" class="very-little-underline">{{ message }}</p>
    </div>
    <div v-if="icon" class="modal-card-footer has-background-primary">
      <b-icon :icon="icon" size="is-large" :type="iconType" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ModalMessage extends Vue {
  @Prop({ default: [] }) messages!: string[]
  @Prop({ default: null }) icon!: string
  @Prop({ default: 'is-success' }) iconType!: string
  @Prop({ default: 3000 }) waitingTime!: number

  async mounted () {
    const delay = new Promise<void>((resolve) => {
      setTimeout(() => { resolve() }, this.waitingTime)
    })
    await delay
    this.$emit('close')
  }
}
</script>
