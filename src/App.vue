<!--
Path: src/App.vue
Este es el componente principal de la aplicación.
-->

<template>
  <NetworkCheck />
</template>

<script>
import NetworkCheck from './components/NetworkCheck.vue'

export default {
  name: 'App',
  components: {
    NetworkCheck
  }
}
</script>

