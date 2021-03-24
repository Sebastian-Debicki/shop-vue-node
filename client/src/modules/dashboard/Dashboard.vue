<template>
  <section>
    <p>Dashboard page!!!!</p>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss">
.dashboard {
  padding: 10rem;
}
</style>
