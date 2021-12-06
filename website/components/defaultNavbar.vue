<template lang="">
	<!-- <b-navbar class="is-primary">
		<template #brand>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<p>QuizzGame</p>
			</b-navbar-item>
		</template>
		<template #end>
			<b-navbar-item >
					<b-button @click="logOut" type="is-secondary">
						Deconnexion
					</b-button>
			</b-navbar-item>
		</template>
	</b-navbar> -->
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultNavbar extends Vue {
	// loggStatus: boolean = !!this.$cookies.get('projet_session')

	// @Watch('loggStatus')
	// loggStatusChanged() {
	// 	console.log('loggStatus detected')
	// }

	// logOut() {
	// 	this.$cookies.remove('projet_session')
	// 	this.$router.push("/")
	// }
}
</script>