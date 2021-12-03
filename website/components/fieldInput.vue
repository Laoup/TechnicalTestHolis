<template lang="">
  <ValidationProvider
    v-slot="{ errors, untouched, valid }"
    :name="label"
    :rules="rules"
    :vid="vid"
  >
    <b-field :label="label">
      <b-input
        icon-pack="none"
        :password-reveal="isItPassword()"
        :value="value"
        :type="type"
        :custom-class="customClassCompute(errors)"
        :placeholder="placeholder"
        @input="handlerInput($event)"
      />
    </b-field>
    <p class="field-error"><span v-if="!untouched && !valid">{{ errors[0] }}</span></p>
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({ components: { ValidationProvider } })
export default class FieldInput extends Vue {
  @Prop({ required: true }) label!: string
  @Prop({ default: '' }) placeholder!: string
  @Prop({ required: true }) value!: string
  @Prop({ default: 'text' }) type!: string
  @Prop({ default: '' }) rules!: string
  @Prop({ default: '' }) vid!: string

  handlerInput (evt: Event) {
    this.$emit('input', evt)
  }

  isItPassword (): boolean {
    return !!(this.type === 'password')
  }

  customClassCompute (errors: string[]): string {
    return (errors.length > 0 ? 'is-danger' : '')
  }
}
</script>
