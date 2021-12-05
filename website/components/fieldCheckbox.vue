<template lang="">
	<ValidationProvider :rules="rules">
		<b-field :label="label" :class="{ 'is-vertical' : vertical }">
			<b-checkbox
				v-for="choice in choices"
				:key="choice"
				v-model="value"
				:type="type"
				:native-value="choice"
			>
				{{ choice.displayValue }}
			</b-checkbox>
		</b-field>
	</ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({ components: { ValidationProvider } })
export default class FieldCheckbox extends Vue {
	@PropSync('model', { required: true }) value!: string
	@Prop({ default: '' }) rules!: string
	@Prop({ default: 'is-black' }) type!: string
	@Prop({ required: true }) choices!: string[]
	// @Prop({ required: true }) label!: string
	@Prop({ default: false }) vertical!: boolean
}
</script>