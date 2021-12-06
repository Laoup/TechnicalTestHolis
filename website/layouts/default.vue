<template lang="">
  <div>
    <Nuxt style="height: 100vh; overflow-y: none;" class="has-background-link has-text-white" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>
