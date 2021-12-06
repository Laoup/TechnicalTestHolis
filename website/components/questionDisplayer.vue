<template lang="">
	<div>
		<h5 class="has-text-weight-bold">{{ objQuestion.question }}</h5>
		<FieldRadio
			:choices="objQuestion.answers"
			:model.sync="model"
			:vertical="true"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'

@Component
export default class QuestionDisplayer extends Vue {
	@Prop({ required: true }) objQuestion: any
	@PropSync('userAnswer', { required: true }) model!: string
}
</script>