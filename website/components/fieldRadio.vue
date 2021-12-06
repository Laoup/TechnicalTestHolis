<template lang="">
	<ValidationProvider :rules="rules" >
		<b-field :class="{ 'is-vertical' : vertical }">
			<b-radio
				v-for="elem in choices"
				:key="elem"
				v-model="value"
				:name="name"
				:type="type"
				:native-value="elem"
				expanded
			>
				{{ elem }}
			</b-radio>
		</b-field>
	</ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({ components: { ValidationProvider } })
export default class FieldRadio extends Vue {
	@Prop({ default: '' }) rules!: string
	@PropSync('model', { required: true }) value!: string
	@Prop({ required: true }) name!: string
	@Prop({ default: 'is-white' }) type!: string
	@Prop({ required: true }) choices!: string[]
	@Prop({ default: false }) vertical!: boolean
}
</script>